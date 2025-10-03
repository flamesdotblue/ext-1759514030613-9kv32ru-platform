import React, { useState } from 'react';
import { Home, Star, Settings, User, Search } from 'lucide-react';

const items = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'explore', label: 'Explore', icon: Star },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function GlassToolbar() {
  const [active, setActive] = useState('home');

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav className="pointer-events-auto flex w-full max-w-3xl items-center justify-between gap-2 rounded-2xl border border-white/15 bg-white/10 p-2 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        {items.map((item) => {
          const Icon = item.icon;
          const selected = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`group relative inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm transition-all ${
                selected
                  ? 'bg-white/20 text-white shadow-inner'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
              aria-label={item.label}
            >
              <Icon className={`h-5 w-5 ${selected ? '' : 'opacity-90'}`} />
              <span className="hidden sm:inline">{item.label}</span>
              {selected && (
                <span className="absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-emerald-400/80 blur-[2px]" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
