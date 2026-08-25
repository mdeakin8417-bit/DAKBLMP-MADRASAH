// ============================================================
// Supabase client configuration — DAKBLMP MADRASAH — Smart Management App
// Project: DAKBLMP MADRASAH
// ============================================================

const SUPABASE_URL = 'https://yfwhrzntvvrgsssifrye.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_RLVJ64-ytl3xvJ3bQqkXEQ_tUt-pfLk';

// supabase-js is loaded via CDN script tag in each page (see <head>)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
