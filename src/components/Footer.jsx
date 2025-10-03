import React from 'react';

export default function Footer() {
  return (
    <footer id="get-started" className="relative z-10 border-t border-white/10 bg-black/60 py-10 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h4 className="text-lg font-semibold">GlassKit</h4>
            <p className="mt-1 text-sm text-white/60">A glassmorphic React starter with 3D flair.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl transition-colors hover:border-white/20 hover:text-white"
            >
              Documentation
            </a>
            <a
              href="#"
              className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl transition-colors hover:border-white/20 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} GlassKit. All rights reserved.</p>
      </div>
    </footer>
  );
}
