/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <Navbar />
            <main className="max-w-5xl mx-auto px-6 pb-24 space-y-32">
              <Hero />
              <Experience />
              <Skills />
              <Education />
              <Certifications />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 pointer-events-auto flex gap-6 text-sm font-medium shadow-2xl">
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#education" className="hover:text-white transition-colors">Education</a>
      </div>
    </nav>
  );
}
