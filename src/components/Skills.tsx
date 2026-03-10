import { motion } from 'motion/react';
import { Code2, Database, Globe, Layout, Server,  } from 'lucide-react';

const skills = [
  { name: 'Web Technologies', icon: <Layout size={24} />, items: ['HTML', 'CSS', 'JavaScript', 'React.js'], color: 'from-blue-500 to-cyan-400' },
  { name: 'Backend', icon: <Server size={24} />, items: ['Node.js', 'Express.js', 'Mongoose'], color: 'from-green-500 to-emerald-400' },
  { name: 'Database', icon: <Database size={24} />, items: ['MongoDB', 'SQL', 'DBMS'], color: 'from-orange-500 to-yellow-400' },
  { name: 'Tools & Platforms', icon: <Globe size={24} />, items: ['Git', 'Postman', 'Cloudinary'], color: 'from-red-500 to-orange-400' },
  { name: 'Programming', icon: <Code2 size={24} />, items: ['Java', 'C', 'Data Structures', 'OOPs'], color: 'from-indigo-500 to-blue-400' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono mb-4"
          >
            / My Skills
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Tech Stack & Expertise
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold">{skill.name}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white/5 rounded-lg text-sm text-neutral group-hover:text-light transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
