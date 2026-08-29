// ============================================================
// i18n — Bangla / English translation system
// Every user-facing string lives here, not hard-coded in HTML.
// ============================================================

const I18N = {
  en: {
    app_name: "DAKBLMP MADRASAH",
    app_tagline: "Smart Management App",
    // Auth
    welcome_back: "Welcome back",
    login_sub: "Sign in to your madrasah account",
    email: "Email or phone",
    password: "Password",
    login_btn: "Sign in",
    forgot_password: "Forgot password?",
    no_account: "New here?",
    create_account: "Create an account",
    full_name: "Full name",
    role: "I am a",
    signup_btn: "Create account",
    have_account: "Already have an account?",
    sign_in_link: "Sign in",
    reset_title: "Reset password",
    reset_sub: "We'll email you a reset link",
    send_reset: "Send reset link",
    back_to_login: "Back to sign in",
    // Roles
    role_founder: "Founder",
    role_admin: "Admin",
    role_teacher: "Teacher",
    role_student: "Student",
    role_guardian: "Guardian",
    role_committee: "Committee",
    // Nav
    nav_dashboard: "Dashboard",
    nav_my_children: "My Children",
    nav_students: "Students",
    nav_teachers: "Teachers",
    nav_attendance: "Attendance",
    nav_fees: "Fees",
    nav_finance: "Income & Expense",
    nav_exams: "Exams & Results",
    nav_notices: "Notices",
    nav_events: "Events",
    nav_islamic: "Islamic",
    nav_committee: "Committee",
    nav_settings: "Settings",
    nav_idcard: "ID Card",
    nav_reports: "Reports",
    nav_users: "User Management",
    nav_logout: "Log out",
    // Dashboard
    dashboard_title: "Dashboard",
    total_students: "Total students",
    total_teachers: "Teachers",
    today_attendance: "Present today",
    fees_due: "Fees due",
    recent_notices: "Recent notices",
    quick_actions: "Quick actions",
    add_student: "Add student",
    take_attendance: "Take attendance",
    record_payment: "Record payment",
    post_notice: "Post notice",
    // Students
    students_title: "Students",
    search_students: "Search by name, ID, roll...",
    new_student: "New student",
    permanent_id: "Permanent ID",
    name: "Name",
    class_label: "Class",
    section_label: "Section",
    status: "Status",
    guardian_contact: "Guardian contact",
    admission_date: "Admission date",
    date_of_birth: "Date of birth",
    gender: "Gender",
    address: "Address",
    save: "Save",
    cancel: "Cancel",
    active: "Active",
    inactive: "Inactive",
    archived: "Archived",
    graduated: "Graduated",
    no_students_title: "No students yet",
    no_students_sub: "Add your first student to get started.",
    student_added: "Student added",
    student_id_auto_hint: "Leave blank to auto-generate from admission year",
    // Common
    male: "Male",
    female: "Female",
    other: "Other",
    loading: "Loading…",
    error_generic: "Something went wrong. Please try again.",
    required_field: "This field is required.",
    logged_out: "You've been logged out",
  },
  bn: {
    app_name: "DAKBLMP MADRASAH",
    app_tagline: "স্মার্ট ম্যানেজমেন্ট অ্যাপ",
    // Auth
    welcome_back: "স্বাগতম",
    login_sub: "আপনার মাদ্রাসা অ্যাকাউন্টে লগইন করুন",
    email: "ইমেইল অথবা ফোন",
    password: "পাসওয়ার্ড",
    login_btn: "লগইন করুন",
    forgot_password: "পাসওয়ার্ড ভুলে গেছেন?",
    no_account: "নতুন ব্যবহারকারী?",
    create_account: "অ্যাকাউন্ট তৈরি করুন",
    full_name: "পূর্ণ নাম",
    role: "আমি একজন",
    signup_btn: "অ্যাকাউন্ট তৈরি করুন",
    have_account: "আগে থেকেই অ্যাকাউন্ট আছে?",
    sign_in_link: "লগইন করুন",
    reset_title: "পাসওয়ার্ড রিসেট",
    reset_sub: "আমরা আপনাকে রিসেট লিংক ইমেইল করব",
    send_reset: "রিসেট লিংক পাঠান",
    back_to_login: "লগইনে ফিরে যান",
    // Roles
    role_founder: "প্রতিষ্ঠাতা",
    role_admin: "অ্যাডমিন",
    role_teacher: "শিক্ষক",
    role_student: "ছাত্র",
    role_guardian: "অভিভাবক",
    role_committee: "কমিটি",
    // Nav
    nav_dashboard: "ড্যাশবোর্ড",
    nav_my_children: "আমার সন্তান",
    nav_students: "ছাত্রছাত্রী",
    nav_teachers: "শিক্ষকবৃন্দ",
    nav_attendance: "হাজিরা",
    nav_fees: "ফি",
    nav_finance: "আয়-ব্যয়",
    nav_exams: "পরীক্ষা ও ফলাফল",
    nav_notices: "নোটিশ",
    nav_events: "ইভেন্ট",
    nav_islamic: "ইসলামিক",
    nav_committee: "কমিটি",
    nav_settings: "সেটিংস",
    nav_idcard: "আইডি কার্ড",
    nav_reports: "রিপোর্ট",
    nav_users: "ব্যবহারকারী পরিচালনা",
    nav_logout: "লগ আউট",
    // Dashboard
    dashboard_title: "ড্যাশবোর্ড",
    total_students: "মোট ছাত্রছাত্রী",
    total_teachers: "শিক্ষকবৃন্দ",
    today_attendance: "আজ উপস্থিত",
    fees_due: "বকেয়া ফি",
    recent_notices: "সাম্প্রতিক নোটিশ",
    quick_actions: "দ্রুত কার্যক্রম",
    add_student: "ছাত্র যোগ করুন",
    take_attendance: "হাজিরা নিন",
    record_payment: "পেমেন্ট রেকর্ড করুন",
    post_notice: "নোটিশ পোস্ট করুন",
    // Students
    students_title: "ছাত্রছাত্রী",
    search_students: "নাম, আইডি, রোল দিয়ে খুঁজুন...",
    new_student: "নতুন ছাত্র",
    permanent_id: "স্থায়ী আইডি",
    name: "নাম",
    class_label: "শ্রেণি",
    section_label: "শাখা",
    status: "অবস্থা",
    guardian_contact: "অভিভাবকের যোগাযোগ",
    admission_date: "ভর্তির তারিখ",
    date_of_birth: "জন্ম তারিখ",
    gender: "লিঙ্গ",
    address: "ঠিকানা",
    save: "সংরক্ষণ করুন",
    cancel: "বাতিল",
    active: "সক্রিয়",
    inactive: "নিষ্ক্রিয়",
    archived: "আর্কাইভড",
    graduated: "উত্তীর্ণ",
    no_students_title: "এখনও কোনো ছাত্র নেই",
    no_students_sub: "শুরু করতে প্রথম ছাত্র যোগ করুন।",
    student_added: "ছাত্র যোগ করা হয়েছে",
    student_id_auto_hint: "ভর্তির বছর থেকে স্বয়ংক্রিয়ভাবে তৈরি করতে খালি রাখুন",
    // Common
    male: "পুরুষ",
    female: "মহিলা",
    other: "অন্যান্য",
    loading: "লোড হচ্ছে…",
    error_generic: "কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।",
    required_field: "এই ঘরটি পূরণ করা আবশ্যক।",
    logged_out: "আপনি লগ আউট হয়ে গেছেন",
  }
};

function getLang() {
  return localStorage.getItem('akb_lang') || 'bn';
}

function setLang(lang) {
  localStorage.setItem('akb_lang', lang);
  applyI18n();
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function applyI18n() {
  const lang = getLang();
  document.body.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'bn' ? 'bn' : 'en');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18n();
});

// Event delegation: works for lang-switch buttons that exist at page load
// (e.g. the login page) AND ones injected later by shell.js (sidebar/topbar
// on every inner page) — a plain querySelectorAll-at-load approach misses
// those, which is why "EN" previously did nothing outside the login page.
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-lang-btn]');
  if (btn) setLang(btn.getAttribute('data-lang-btn'));
});
