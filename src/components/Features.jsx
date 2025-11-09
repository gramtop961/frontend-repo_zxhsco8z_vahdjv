import { Users, CheckCircle, MessageSquare, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Academic Tracking',
    points: [
      'Attendance and grades in one place',
      'Role-based dashboards',
      'Student profiles with insights',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Administrative Automation',
    points: [
      'Bulk imports and exports',
      'CSV/PDF reports',
      'Smart validations & approvals',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    points: [
      'Real-time messaging',
      'Announcements & notifications',
      'Parent-teacher channels',
    ],
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    points: [
      'Attendance trends',
      'Grade distributions',
      'Class performance',
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-neutral-50 dark:bg-neutral-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          Everything you need to run a modern school
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
          Built for Admins, Teachers, Students, and Parents with secure access and fast workflows.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow"
              aria-label={f.title}
            >
              <div className="h-10 w-10 rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {f.title}
              </h3>
              <ul className="mt-3 space-y-2 text-neutral-600 dark:text-neutral-300">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
