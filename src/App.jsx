import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="demo" className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Request Demo</h2>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Fill in the form and we’ll reach out shortly.</p>
              <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()} aria-label="Request demo form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="institution" className="text-sm font-medium">Institution</label>
                  <input id="institution" name="institution" type="text" required className="mt-1 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about your needs" />
                </div>
                <div className="flex items-center justify-end gap-3">
                  <button type="reset" className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">Clear</button>
                  <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium">Send Request</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
