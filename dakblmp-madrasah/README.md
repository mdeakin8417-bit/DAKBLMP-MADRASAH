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

## প্রথমবার লগইন করার আগে
1. প্রথমে নিজে "অ্যাডমিন" role দিয়ে Sign up করো
2. Supabase dashboard-এ গিয়ে (Table editor → profiles) নিজের row-এ role manually `founder` করে দাও — কারণ প্রথম founder account নিরাপত্তার জন্য app থেকে সরাসরি বানানো যায় না
3. এরপর থেকে founder/admin হিসেবে বাকি সব feature ব্যবহার করা যাবে

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
