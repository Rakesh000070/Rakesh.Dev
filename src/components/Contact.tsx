import { motion } from 'motion/react';
import { Send, Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-mono mb-4">/ Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="text-primary">extraordinary</span> together.</h3>
            
            <p className="text-neutral text-lg mb-12 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:rakeshnayak2332341k@gmail.com" 
                className="flex items-center gap-4 text-neutral hover:text-primary transition-colors group"
              >
                <div className="p-3 glass rounded-xl group-hover:bg-primary/10 transition-colors">
                  <Mail size={20} />
                </div>
                <span>rakeshnayak2332341k@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-neutral">
                <div className="p-3 glass rounded-xl">
                  <MapPin size={20} />
                </div>
                <span>Berhampur, Odisha</span>
              </div>
              <a 
                href="tel:+919777094193" 
                className="flex items-center gap-4 text-neutral hover:text-primary transition-colors group"
              >
                <div className="p-3 glass rounded-xl group-hover:bg-primary/10 transition-colors">
                  <Phone size={20} />
                </div>
                <span>+91 9777094193</span>
              </a>
            </div>

            <div className="flex gap-4 mt-12">
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com/Rakesh000070"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-2xl text-neutral hover:text-primary hover:border-primary/50 transition-all"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/rakesh-nayak07/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-2xl text-neutral hover:text-primary hover:border-primary/50 transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://x.com/Rakesh_Nayak007?t=o_qZRgahOpHQ5dQTsOivsg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-2xl text-neutral hover:text-primary hover:border-primary/50 transition-all"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
