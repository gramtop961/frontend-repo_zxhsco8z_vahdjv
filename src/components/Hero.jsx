import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 text-xs font-semibold">
              <Rocket size={14} /> New
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
              Empower learning. Simplify management.
            </h1>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg max-w-prose">
              All-in-one Student Management System — Attendance, Grades, Messaging, and Analytics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/login"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Login to the Student Management System"
              >
                Get Started
                <ArrowRight size={16} />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Request a demo"
              >
                Request Demo
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent dark:from-indigo-400/10 p-1">
              <div className="h-full w-full rounded-xl bg-white dark:bg-neutral-900 p-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl p-4 bg-indigo-50 dark:bg-indigo-950/40">
                  <div className="h-2 w-16 rounded bg-indigo-300/60" />
                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-24 rounded bg-indigo-200/60" />
                    <div className="h-2 w-20 rounded bg-indigo-200/40" />
                  </div>
                </div>
                <div className="rounded-xl p-4 border border-neutral-200 dark:border-neutral-800">
                  <div className="h-24 rounded-lg bg-neutral-100 dark:bg-neutral-800" />
                  <div className="mt-3 h-2 w-28 rounded bg-neutral-200 dark:bg-neutral-700" />
                </div>
                <div className="col-span-2 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800">
                  <div className="h-32 rounded-lg bg-neutral-100 dark:bg-neutral-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
