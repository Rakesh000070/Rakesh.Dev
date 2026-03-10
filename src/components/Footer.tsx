import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-display font-bold text-primary tracking-tighter"
        >
          RAKESH<span className="text-light">.DEV</span>
        </motion.div>

        <p className="text-neutral text-sm">
          © {new Date().getFullYear()} Rakesh Nayak. All rights reserved.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-neutral hover:text-primary text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-neutral hover:text-primary text-sm transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
