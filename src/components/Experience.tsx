import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data/resume';
import { ChevronDown, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
          <Briefcase className="text-slate-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
      </motion.div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: any, index: number, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(index === 0 || index === 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:bg-white/[0.04] transition-colors"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
          <div className="text-slate-400 mt-1">{exp.company}</div>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="text-right">
            <div>{exp.dates}</div>
            {exp.location && <div>{exp.location}</div>}
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && exp.bullets.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 pt-2">
              <ul className="space-y-3">
                {exp.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
