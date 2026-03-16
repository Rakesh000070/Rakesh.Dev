import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CHAKRAVYUH — AI OSINT Engine',
    description: 'A multi-modal AI OSINT & Intelligence Fusion Engine using Google Gemini for synthesis and real-time search grounding. Features a tactical dashboard with D3.js force-directed graphs.',
    image: '/images/Screenshot (10).png',
    tags: ['React 19', 'Google Gemini', 'D3.js', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/Rakesh000070/Chakra-Vyuh',
    demo: 'https://chakravyuh-26.netlify.app/',
  },
  {
    title: 'Job and Internship Finder Platform',
    description: 'A portal enabling recruiters to post job listings and candidates to apply through a secure web interface. Integrated resume upload and media management using Cloudinary.',
    image: '/images/comingsoon.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Student Management System',
    description: 'A full-stack web application to manage student records, attendance, and academic data. Implemented RESTful APIs following MVC architecture.',
    image: '/images/coming-soon.jpg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-mono mb-4"
            >
              / Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Featured Projects
            </motion.h3>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com/Rakesh000070"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral hover:text-primary transition-colors flex items-center gap-2 font-medium"
          >
            View all on GitHub <Github size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-all"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-all"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-primary px-3 py-1 bg-primary/10 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-neutral leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
