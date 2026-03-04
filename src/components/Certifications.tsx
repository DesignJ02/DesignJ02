import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Award } from 'lucide-react';

export default function Certifications() {
  // Deduplicate certifications
  const uniqueCerts = Array.from(new Set(resumeData.certifications));

  return (
    <section id="certifications" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
          <Award className="text-slate-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {uniqueCerts.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-slate-300">{cert}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
