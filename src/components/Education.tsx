import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  // Deduplicate education entries based on degree and institution
  const uniqueEdu = resumeData.education.reduce((acc: any[], current) => {
    const x = acc.find(item => item.degree === current.degree && item.institution === current.institution);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <section id="education" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
          <GraduationCap className="text-slate-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {uniqueEdu.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{edu.degree}</h3>
            <div className="text-slate-400">{edu.institution}</div>
            {edu.dates && <div className="text-sm text-slate-500 mt-2">{edu.dates}</div>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
