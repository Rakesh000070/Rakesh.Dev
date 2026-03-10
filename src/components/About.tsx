import { motion } from 'motion/react';

const tags = ['Creative', 'Dedicated', 'Fast Learner', 'Team Player', 'Detail Oriented', 'Open Source'];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary-dark/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/My-Img.jpg"
              alt="Profile"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl flex items-center justify-center text-white font-display font-bold text-4xl shadow-2xl">
            1+
            <span className="text-xs block mt-1 font-sans font-normal opacity-80">Years Exp.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-mono mb-4">/ About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Aspiring Full Stack Developer with a <span className="text-primary">MERN</span> Focus.
          </h3>
          <p className="text-neutral text-lg mb-8 leading-relaxed">
            I'm an aspiring full stack developer who enjoys building practical web applications and learning how real systems work end to end. 
            I've gained hands-on experience with frontend and backend development, RESTful APIs, and databases.
          </p>
          <p className="text-neutral text-lg mb-10 leading-relaxed">
            My journey includes industrial vocational training at Rourkela Steel Plant (SAIL) and active collaboration as a Core Member of the NIST Cloud Computing Club, where I mentor juniors and focus on scalable, user-focused application development.
          </p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-neutral hover:text-primary hover:border-primary/50 transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
