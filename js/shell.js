// ============================================================
// App shell — sidebar (desktop) + bottom nav (mobile) + topbar
// Renders based on the signed-in user's role.
// Usage: call renderShell('students') on each protected page,
// where the arg is the current page's nav key.
// ============================================================

const NAV_ITEMS = [
  { key: 'dashboard', href: 'dashboard.html', icon: '&#8962;', label: 'nav_dashboard', roles: 'all' },
  { key: 'my-children', href: 'guardian.html', icon: '&#128118;', label: 'nav_my_children', roles: ['guardian'] },
  { key: 'students', href: 'students.html', icon: '&#128101;', label: 'nav_students', roles: ['founder','admin','teacher'] },
  { key: 'teachers', href: 'teachers.html', icon: '&#127891;', label: 'nav_teachers', roles: ['founder','admin'] },
  { key: 'attendance', href: 'attendance.html', icon: '&#10003;', label: 'nav_attendance', roles: ['founder','admin','teacher'] },
  { key: 'fees', href: 'fees.html', icon: '&#2547;', label: 'nav_fees', roles: ['founder','admin'] },
  { key: 'finance', href: 'finance.html', icon: '&#128184;', label: 'nav_finance', roles: ['founder','admin'] },
  { key: 'exams', href: 'exams.html', icon: '&#128220;', label: 'nav_exams', roles: 'all' },
  { key: 'notices', href: 'notices.html', icon: '&#128276;', label: 'nav_notices', roles: 'all' },
  { key: 'events', href: 'events.html', icon: '&#128197;', label: 'nav_events', roles: 'all' },
  { key: 'islamic', href: 'islamic.html', icon: '&#9770;', label: 'nav_islamic', roles: 'all' },
  { key: 'committee', href: 'committee.html', icon: '&#127970;', label: 'nav_committee', roles: 'all' },
  { key: 'settings', href: 'settings.html', icon: '&#9881;', label: 'nav_settings', roles: ['founder','admin'] },
  { key: 'idcard', href: 'idcard.html', icon: '&#128179;', label: 'nav_idcard', roles: ['founder','admin'] },
  { key: 'reports', href: 'reports.html', icon: '&#128202;', label: 'nav_reports', roles: ['founder','admin'] },
  { key: 'users', href: 'users.html', icon: '&#128101;', label: 'nav_users', roles: ['founder','admin'] },
];

function itemVisible(item, role) {
  return item.roles === 'all' || item.roles.includes(role);
}

function renderPendingApprovalScreen(profile) {
  document.body.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-card" style="text-align:center;">
        <div class="auth-mark">⏳</div>
        <div class="auth-title display">অনুমোদনের অপেক্ষায় / Pending Approval</div>
        <p class="auth-sub" style="margin-top: var(--space-3);">
          স্বাগতম, ${profile.full_name}। আপনার অ্যাকাউন্ট এখনও একজন প্রতিষ্ঠাতা/অ্যাডমিন কর্তৃক অনুমোদিত হয়নি।
          <br><br>
          Welcome, ${profile.full_name}. Your account hasn't been approved and assigned a role yet.
          Please contact the madrasah office — once a founder or admin approves your account, you'll get full access.
        </p>
        <button class="btn btn-ghost btn-block" id="pending-logout" style="margin-top: var(--space-4);">লগ আউট / Log out</button>
        <a href="profile.html" class="btn btn-primary btn-block" style="margin-top: var(--space-3); text-decoration:none;">নাম/পাসওয়ার্ড পরিবর্তন / Edit name or password</a>
      </div>
    </div>
  `;
  document.getElementById('pending-logout').addEventListener('click', signOut);
}

async function renderShell(activeKey) {
  const profile = await requireAuth();
  if (!profile) return null;

  // Gate: accounts must be approved AND have a role assigned by a
  // founder/admin before they can see any app content.
  if (!profile.is_approved || !profile.role) {
    renderPendingApprovalScreen(profile);
    return null;
  }

  const visibleItems = NAV_ITEMS.filter(i => itemVisible(i, profile.role));

  // Sidebar (desktop)
  const sidebarHtml = `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="mark">DM</div>
        <div>
          <div class="name" data-i18n="app_name">DAKBLMP MADRASAH</div>
          <div class="sub" data-i18n="app_tagline">Smart Management App</div>
        </div>
      </div>
      <nav class="nav-group">
        ${visibleItems.map(i => `
          <a class="nav-link ${i.key === activeKey ? 'active' : ''}" href="${i.href}">
            <span class="icon">${i.icon}</span>
            <span data-i18n="${i.label}">${i.label}</span>
          </a>
        `).join('')}
      </nav>
      <nav class="nav-group" style="margin-top:auto;">
        <button class="nav-link" id="shell-logout-desktop">
          <span class="icon">&#8630;</span>
          <span data-i18n="nav_logout">লগ আউট</span>
        </button>
      </nav>
    </aside>
  `;

  // Bottom nav (mobile) — first 4 + more collapses into settings/menu
  const mobileItems = visibleItems.slice(0, 5);
  const bottomNavHtml = `
    <nav class="bottom-nav">
      ${mobileItems.map(i => `
        <button onclick="window.location.href='${i.href}'" class="${i.key === activeKey ? 'active' : ''}">
          <span class="icon">${i.icon}</span>
          <span data-i18n="${i.label}">${i.label}</span>
        </button>
      `).join('')}
    </nav>
  `;

  const topbarHtml = `
    <header class="topbar">
      <div class="row" style="gap: 10px;">
        <button onclick="history.back()" title="Back" style="background:none; border:none; font-size:19px; color: var(--color-ink-soft); cursor:pointer; display:flex; align-items:center; padding:0;">&#8592;</button>
        <div class="topbar-title">
          <span data-i18n="${NAV_ITEMS.find(i => i.key === activeKey)?.label || 'nav_dashboard'}"></span>
        </div>
      </div>
      <div class="row" style="gap: 12px;">
        <a href="search.html" title="Search" style="color: var(--color-ink-soft); font-size: 17px; display:flex; align-items:center;">&#128269;</a>
        <div class="lang-switch">
          <button data-lang-btn="bn">বাং</button>
          <button data-lang-btn="en">EN</button>
        </div>
        <a href="profile.html" class="avatar" title="আমার অ্যাকাউন্ট / My Account" style="text-decoration:none;">${initials(profile.full_name)}</a>
      </div>
    </header>
  `;

  document.getElementById('shell-sidebar-slot').innerHTML = sidebarHtml;
  document.getElementById('shell-topbar-slot').innerHTML = topbarHtml;
  document.getElementById('shell-bottomnav-slot').innerHTML = bottomNavHtml;

  document.getElementById('shell-logout-desktop').addEventListener('click', signOut);

  applyI18n();
  return profile;
}
