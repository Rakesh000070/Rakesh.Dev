import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    type: 'experience',
    title: 'Summer Intern',
    company: 'Rourkela Steel Plant (SAIL)',
    period: 'June 2025 - July 2025',
    description: 'Completed industrial vocational training in the New Plate Mill Department, gaining exposure to large-scale manufacturing workflows and quality control processes.',
    icon: <Briefcase size={20} />,
  },
  {
    type: 'education',
    title: 'BTech in Information Technology',
    company: 'NIST University',
    period: 'Nov 2023 - Present',
    description: 'Currently pursuing BTech with a focus on web development and cloud computing. CGPA: 8.05/10.',
    icon: <GraduationCap size={20} />,
  },
  {
    type: 'experience',
    title: 'Core Member',
    company: 'NIST Cloud Computing Club',
    period: 'Nov 2025 - Present',
    description: 'Mentoring junior students in full-stack web development, Git version control, and coding best practices.',
    icon: <Briefcase size={20} />,
  },
  {
    type: 'education',
    title: 'Intermediate (CHSE)',
    company: 'Nalanda vidya mandir',
    period: 'May 2021 - May 2023',
    description: 'Completed higher secondary education with 79%.',
    icon: <GraduationCap size={20} />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono mb-4"
          >
            / Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Experience & Education
          </motion.h3>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:left-[-50%]' : 'md:pl-12 md:left-0'}`}
            >
              <div className={`absolute top-0 w-10 h-10 bg-bg-dark border-2 border-primary rounded-full flex items-center justify-center text-primary z-10 ${i % 2 === 0 ? 'right-[-21px] md:right-[-21px]' : 'left-[-21px] md:left-[-21px]'}`}>
                {item.icon}
              </div>
              
              <div className="glass p-6 rounded-2xl hover:border-primary/30 transition-all">
                <span className="text-primary font-mono text-sm mb-2 block">{item.period}</span>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <h5 className="text-neutral font-medium mb-4">{item.company}</h5>
                <p className="text-neutral/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
