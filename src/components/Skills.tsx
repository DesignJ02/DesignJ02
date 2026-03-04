import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Zap } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
          <Zap className="text-slate-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Top Skills</h2>
      </motion.div>

      <div className="flex flex-wrap gap-3">
        {resumeData.skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
