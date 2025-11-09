import { useEffect, useState } from 'react';
import { Bell, MessageCircle, Menu, X, Sun, Moon, LogIn } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            <a href="/" className="flex items-center gap-2" aria-label="Student Management System home">
              <div className="h-8 w-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">S</div>
              <span className="hidden sm:block font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Student Management System
              </span>
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#features"
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Features
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              aria-label="Notifications"
              className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Bell size={18} />
            </button>
            <button
              aria-label="Messages"
              className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <MessageCircle size={18} />
            </button>
            <a
              href="/login"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Go to login"
            >
              <LogIn size={16} />
              Login
            </a>
          </div>
        </div>

        {open && (
          <div className="sm:hidden pb-4">
            <div className="flex flex-col gap-1">
              <a
                href="#features"
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                onClick={() => setOpen(false)}
              >
                Features
              </a>
              <a
                href="#contact"
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
