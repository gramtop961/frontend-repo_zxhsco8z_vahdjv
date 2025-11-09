export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-neutral-900 dark:text-neutral-100 font-semibold">Student Management System</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">support@schoolsms.example</p>
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">Terms</a>
          </div>
        </div>
        <div className="mt-6 text-xs text-neutral-500 dark:text-neutral-500">v1.0.0</div>
      </div>
    </footer>
  );
}
