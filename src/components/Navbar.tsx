import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Menu, X, Twitter, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved as 'light' | 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'glass-dark py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-primary tracking-tighter"
        >
          RAKESH<span className="text-light">.DEV</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-neutral hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
            <a href="https://github.com/Rakesh000070" target="_blank" rel="noreferrer" className="text-neutral hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/rakesh-nayak07/" target="_blank" rel="noreferrer" className="text-neutral hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://x.com/Rakesh_Nayak007?t=o_qZRgahOpHQ5dQTsOivsg&s=09" target="_blank" rel="noreferrer" className="text-neutral hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="mailto:rakeshnayak2332341k@gmail.com" className="text-neutral hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-neutral hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-neutral hover:text-primary"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="text-light" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass-dark border-t border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-neutral hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 pt-4 border-t border-white/10">
            <a href="https://github.com/Rakesh000070" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="text-neutral hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rakesh-nayak07/" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="text-neutral hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/Rakesh_Nayak007?t=o_qZRgahOpHQ5dQTsOivsg&s=09" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="text-neutral hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:rakeshnayak2332341k@gmail.com" onClick={() => setIsOpen(false)} className="text-neutral hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
