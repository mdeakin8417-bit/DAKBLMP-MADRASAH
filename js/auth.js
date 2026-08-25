// ============================================================
// Authentication — sign up, sign in, session guard, sign out
// ============================================================

async function getSession() {
  const { data } = await supabaseClient.auth.getSession();
  return data.session;
}

async function getMyProfile() {
  const session = await getSession();
  if (!session) return null;

  const { data, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .maybeSingle();

  if (error) {
    console.error(error);
    return null;
  }

  if (data) return data;

  // No profile row exists for this authenticated user — this happens when
  // email confirmation was pending at signup time, so the original insert
  // (attempted with no active session) was blocked by RLS. Now that we
  // have a real session, self-heal by creating it here instead of
  // returning null, which previously caused an infinite redirect loop
  // between index.html and dashboard.html.
  const fullName = session.user.user_metadata?.full_name || session.user.email || 'User';
  const { data: created, error: createError } = await supabaseClient
    .from('profiles')
    .insert({ id: session.user.id, full_name: fullName, role: null, is_approved: false })
    .select()
    .single();

  if (createError) {
    console.error('Profile self-heal failed:', createError);
    return null;
  }
  return created;
}

// Redirects to login if not authenticated. Call at top of protected pages.
async function requireAuth() {
  const session = await getSession();
  if (!session) {
    window.location.href = 'index.html';
    return null;
  }
  const profile = await getMyProfile();
  if (!profile) {
    // Guard against an index.html <-> dashboard.html redirect loop: if we
    // already tried this once in this tab and still have no profile,
    // stop redirecting and show a clear error instead of flickering.
    if (sessionStorage.getItem('akb_auth_retry')) {
      sessionStorage.removeItem('akb_auth_retry');
      document.body.innerHTML = `
        <div class="auth-wrap">
          <div class="auth-card" style="text-align:center;">
            <div class="auth-mark">!</div>
            <div class="auth-title display">লগইন সমস্যা / Login issue</div>
            <p class="auth-sub" style="margin-top: var(--space-3);">
              আপনার অ্যাকাউন্ট প্রোফাইল লোড করা যাচ্ছে না। অনুগ্রহ করে আবার লগইন করুন অথবা মাদ্রাসা অফিসের সাথে যোগাযোগ করুন।
              <br><br>
              We couldn't load your account profile. Please try logging in again, or contact the madrasah office.
            </p>
            <button class="btn btn-primary btn-block" style="margin-top: var(--space-4);" onclick="window.location.href='index.html'">লগইনে ফিরে যান / Back to login</button>
          </div>
        </div>
      `;
      return null;
    }
    sessionStorage.setItem('akb_auth_retry', '1');
    window.location.href = 'index.html';
    return null;
  }
  sessionStorage.removeItem('akb_auth_retry');
  return profile;
}

async function signUp({ email, password, fullName }) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } }
  });
  if (error) throw error;

  // Create the matching profile row with NO role and is_approved=false.
  // A founder/admin must assign a role and approve the account before
  // this person can use the app — see js/shell.js pending-approval gate.
  if (data.user) {
    const { error: profileError } = await supabaseClient
      .from('profiles')
      .insert({
        id: data.user.id,
        full_name: fullName,
        role: null,
        is_approved: false
      });
    if (profileError) console.warn('Profile creation deferred:', profileError.message);
  }
  return data;
}

async function signIn({ email, password }) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function signOut() {
  await supabaseClient.auth.signOut();
  window.location.href = 'index.html';
}

async function sendPasswordReset(email) {
  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + '/reset-password.html'
  });
  if (error) throw error;
}
