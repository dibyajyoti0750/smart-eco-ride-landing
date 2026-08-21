export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-5xl">
        <nav className="flex items-center justify-between py-8">
          <div className="text-xl font-bold tracking-tight">Smart Eco Ride</div>

          <span className="text-sm text-zinc-400">Coming Soon...</span>
        </nav>

        <section className="min-h-[75vh] flex flex-col items-center justify-center text-center">
          <div className="mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            The future of urban mobility is coming ⚡
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Ride Smart.
            <br />
            <span className="text-emerald-400">Ride Electric.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A smarter, cleaner and more efficient way to move through the city.
            Our electric scooters are coming soon.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@smartecoride.in"
              className="rounded-full bg-emerald-400 px-7 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-300"
            >
              Get Notified
            </a>

            <button
              disabled
              className="rounded-full border border-zinc-800 px-7 py-3 font-semibold text-zinc-500"
            >
              Launching Soon
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="text-2xl">⚡</div>
              <h3 className="mt-3 font-semibold">Electric</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Built for a cleaner future.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="text-2xl">🔋</div>
              <h3 className="mt-3 font-semibold">Efficient</h3>
              <p className="mt-1 text-sm text-zinc-500">
                More miles, less energy.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="text-2xl">🌱</div>
              <h3 className="mt-3 font-semibold">Eco-Friendly</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Better rides for our planet.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-900 py-6 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Smart Eco Ride. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
