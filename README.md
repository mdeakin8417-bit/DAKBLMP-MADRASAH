# DAKBLMP MADRASAH — Smart Management App — Frontend (Phase 1)

## এই zip-এ যা আছে
- `index.html` — Login / Sign up / Password reset
- `dashboard.html` — Role-aware dashboard (live stats থেকে Supabase)
- `students.html` — সম্পূর্ণ কার্যকর Student module: list, search, add (permanent ID auto-generation সহ)
- `teachers.html`, `attendance.html`, `fees.html`, `exams.html`, `notices.html`, `committee.html`, `settings.html` — placeholder পেজ (nav কাঠামো প্রস্তুত, পরবর্তী ধাপে পূর্ণ হবে)
- `css/style.css` — সম্পূর্ণ ডিজাইন সিস্টেম (green + gold Islamic theme, mobile-first)
- `js/supabase-client.js` — তোমার DAKBLMP MADRASAH প্রজেক্টের সাথে already connected
- `js/i18n.js` — বাংলা/English সব টেক্সট এক জায়গায়
- `js/auth.js`, `js/shell.js`, `js/ui.js` — auth logic, role-based navigation, shared UI helpers

## যেভাবে টেস্ট করবে
কোনো build step লাগবে না — শুধু ব্রাউজারে `index.html` খোলো, অথবা মোবাইলে দেখতে
GitHub Pages/Netlify/Vercel-এ পুরো folder আপলোড করো (drag & drop করলেই deploy হয়ে যাবে)।

## যেভাবে GitHub-এ তুলবে (মোবাইল থেকে)
1. GitHub app বা mobile browser দিয়ে নতুন repo বানাও (যেমন `akb-madrasah`)
2. এই সব ফাইল upload করো (repo-তে "Add file → Upload files")
3. Vercel বা Netlify-তে গিয়ে "Import from GitHub" করলেই live হয়ে যাবে

## প্রথমবার ব্যবহারের আগে
1. প্রথমে নিজে Sign up করো (এখন সাইনআপে কোনো role বাছাই নেই — শুধু নাম/ইমেইল/পাসওয়ার্ড)
2. Supabase dashboard-এ গিয়ে (Table editor → profiles) নিজের row-এ `role` = `founder` এবং `is_approved` = `true` করে দাও — কারণ প্রথম founder account নিরাপত্তার জন্য app থেকে সরাসরি বানানো যায় না
3. এরপর থেকে founder হিসেবে লগইন করে **"ব্যবহারকারী পরিচালনা"** পেজ থেকে বাকি সবার (Teacher/Student/Guardian/Committee/Admin) role নির্ধারণ ও অনুমোদন করতে পারবে

## Approval workflow (নতুন)
- যে কেউ Sign up করলে তার অ্যাকাউন্ট **"Pending Approval"** অবস্থায় থাকবে — কোনো role/dashboard access পাবে না
- শুধু Founder/Admin **"ব্যবহারকারী পরিচালনা"** পেজ থেকে role নির্ধারণ করে approve করতে পারবে
- শুধু **Founder** কাউকে "Admin" role দিতে পারবে (Admin নিজে আরেকজনকে Admin বানাতে পারবে না) — এটা database-level এ trigger দিয়ে lock করা

## পরবর্তী ধাপ (roadmap অনুযায়ী)
- Teacher management + assignment UI
- Attendance-taking flow (class → section → date → present/absent grid)
- Fees: structure setup + payment recording + due report
- Exams + result entry + marksheet
- Notices/Committee/Events পূর্ণাঙ্গ CRUD
- Offline sync, ID card generator, reports/analytics ড্যাশবোর্ড

## গুরুত্বপূর্ণ
- Database (Supabase) সম্পূর্ণ প্রস্তুত ও RLS দিয়ে সুরক্ষিত — এই frontend শুধু তার উপর বসেছে
- `permanent_student_id` একবার সেট হলে কখনো পরিবর্তনযোগ্য নয় (database-level এ lock করা)
