import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { ArrowDown, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Hero() {
  const { basics } = resumeData;

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {basics.extra}
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
          {basics.name}
        </h1>
        
        <h2 className="text-2xl md:text-4xl text-slate-400 font-light">
          {basics.title}
        </h2>

        <div className="flex flex-wrap gap-4 text-sm text-slate-400 mt-4">
          <div className="flex items-center gap-1"><MapPin size={16} /> {basics.location}</div>
          <div className="flex items-center gap-1"><Mail size={16} /> {basics.email}</div>
          <div className="flex items-center gap-1"><Phone size={16} /> {basics.phone}</div>
        </div>

        <div className="flex gap-4 mt-8">
          {basics.links.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
              <ExternalLink size={16} /> {link.name}
            </a>
          ))}
        </div>

        <div className="prose prose-invert max-w-2xl mt-8 text-slate-400 leading-relaxed">
          {basics.summary.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-8">
          <a href="#experience" className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2">
            View Experience <ArrowDown size={18} />
          </a>
          <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2">
            Download Resume <Download size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
