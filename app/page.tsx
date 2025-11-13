import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-800 text-white p-6">
      <div className="max-w-xl w-full text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center justify-center mb-6">
          <div className="text-6xl md:text-7xl animate-bounce" aria-hidden>
            🏗️
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
          Site Under Construction
        </h1>
        <p className="text-sm md:text-base text-slate-200/90 mb-6">
          Thanks for stopping by — we're building something awesome. Check back
          soon!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="inline-block px-5 py-2 rounded-lg bg-white text-slate-900 font-semibold shadow hover:scale-[1.02] transform transition"
          >
            Notify me
          </a>

          <a
            href="/"
            className="inline-block px-5 py-2 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition"
          >
            Return home
          </a>
        </div>

        <div className="mt-6 text-xs text-slate-300/80">
          Estimated launch: <span className="font-medium">Coming soon</span>
        </div>
      </div>
    </main>
  );
}
