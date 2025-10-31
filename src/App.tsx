import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-12 px-6 py-16 text-center">
      <header className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-500/10 p-6 transition hover:scale-105 hover:border-indigo-400 hover:bg-indigo-500/20"
          >
            <img
              src={viteLogo}
              alt="Vite logo"
              className="h-16 w-16 transition group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.8)]"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center rounded-full border border-sky-500/40 bg-sky-500/10 p-6 transition hover:scale-105 hover:border-sky-400 hover:bg-sky-500/20"
          >
            <img
              src={reactLogo}
              alt="React logo"
              className="h-16 w-16 transition group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            />
          </a>
        </div>
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            React + Vite + Tailwind
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Ice Fruit está listo para despegar
          </h1>
          <p className="text-base text-slate-300 sm:text-lg">
            Personaliza este canvas usando utilidades de Tailwind y construye tu
            interfaz en minutos.
          </p>
        </div>
      </header>

      <section className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-lg text-slate-200">
          Conoce el contador más fresco de la galaxia:
        </p>
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-indigo-400/40 bg-indigo-500/10 p-8 shadow-lg shadow-indigo-500/20">
          <span className="text-6xl font-semibold text-indigo-300 drop-shadow">
            {count}
          </span>
          <button
            type="button"
            onClick={() => setCount((current) => current + 1)}
            className="rounded-full bg-indigo-500 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-200"
          >
            Suma una fruta
          </button>
        </div>
      </section>

      <footer className="text-sm text-slate-400">
        Edita <code className="rounded bg-slate-900 px-2 py-1">src/App.tsx</code>{' '}
        y guarda para recargar en vivo.
      </footer>
    </main>
  )
}

export default App
