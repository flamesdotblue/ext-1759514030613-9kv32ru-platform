import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs text-white/80">Live demo • Glassmorphic UI</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Floating Glassmorphism Toolbar
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          A modern, aesthetic, and futuristic toolbar experience. Interact with the 3D scene while
          your UI remains crisp and tactile.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#get-started"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/15 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all hover:border-white/25 hover:bg-white/25 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-xl transition-colors hover:border-white/20 hover:text-white"
          >
            View Features
          </a>
        </div>
      </div>
    </section>
  );
}
