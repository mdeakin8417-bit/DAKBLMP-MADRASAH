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
    .single();
  if (error) {
    console.error(error);
    return null;
  }
  return data;
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
    window.location.href = 'index.html';
    return null;
  }
  return profile;
}

async function signUp({ email, password, fullName, role }) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } }
  });
  if (error) throw error;

  // Create the matching profile row. If email confirmation is required,
  // there may be no active session yet — the trigger-free approach here
  // simply attempts the insert, which succeeds once a session exists.
  if (data.user) {
    const { error: profileError } = await supabaseClient
      .from('profiles')
      .insert({
        id: data.user.id,
        full_name: fullName,
        role: role || 'student'
      });
    // Don't hard-fail signup if the profile insert races with email
    // confirmation — surface it, but the row can be created on first login.
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
