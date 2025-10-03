import React from 'react';
import { Layers, Sparkles, Shield, Cpu } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Layered Glass',
    desc: 'Multi-layer translucent surfaces with subtle borders and blur.'
  },
  {
    icon: Sparkles,
    title: 'Ambient Glow',
    desc: 'Soft glows and gradients that enhance focus without distraction.'
  },
  {
    icon: Shield,
    title: 'Accessible',
    desc: 'High contrast, keyboard friendly, and responsive by default.'
  },
  {
    icon: Cpu,
    title: 'GPU Friendly',
    desc: 'Optimized 3D scene and smooth UI animations using the GPU.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 pb-24">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Designed for clarity</h2>
        <a href="#get-started" className="text-sm text-white/70 hover:text-white">Learn more →</a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
