import React from 'react';
import Hero from './components/Hero.jsx';
import GlassToolbar from './components/GlassToolbar.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <GlassToolbar />
      <Hero />
      <FeatureGrid />
      <Footer />
    </div>
  );
}
