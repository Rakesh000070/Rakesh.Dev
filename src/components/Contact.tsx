import { useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Send, Github, Linkedin, Twitter, Mail, MapPin, Phone, CheckCircle2, AlertCircle, X, PartyPopper } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    if (!formRef.current) {
      console.error('Form reference is null');
      return;
    }

    setIsSending(true);
    setStatus('idle');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS Config Check:', { 
      hasServiceId: !!SERVICE_ID, 
      hasTemplateId: !!TEMPLATE_ID, 
      hasPublicKey: !!PUBLIC_KEY 
    });

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      let missing = [];
      if (!SERVICE_ID) missing.push('Service ID');
      if (!TEMPLATE_ID) missing.push('Template ID');
      if (!PUBLIC_KEY) missing.push('Public Key');
      
      console.error(`EmailJS configuration missing: ${missing.join(', ')}`);
      setStatus('error');
      setIsSending(false);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setStatus('success');
          formRef.current?.reset();
      }, (error) => {
          console.error('Failed to send email:', error);
          setStatus('error');
          // Reset error status after 5 seconds
          setTimeout(() => setStatus('idle'), 5000);
      })
      .finally(() => {
          setIsSending(false);
      });
  };

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
            <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral ml-1">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral ml-1">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSending}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group ${
                  isSending ? 'bg-neutral/20 cursor-not-allowed' : 'bg-primary hover:bg-orange-600 text-white'
                }`}
              >
                {isSending ? 'Sending...' : 'Send Message'}
                {!isSending && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-rose-400 bg-rose-400/10 p-4 rounded-xl border border-rose-400/20"
                >
                  <AlertCircle size={18} />
                  <span className="text-sm">
                    {!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
                      ? `Configuration missing: ${[
                          !import.meta.env.VITE_EMAILJS_SERVICE_ID && 'Service ID',
                          !import.meta.env.VITE_EMAILJS_TEMPLATE_ID && 'Template ID',
                          !import.meta.env.VITE_EMAILJS_PUBLIC_KEY && 'Public Key'
                        ].filter(Boolean).join(', ')}. Please check your settings.` 
                      : 'Oops! Something went wrong. Please try again later.'}
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {status === 'success' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStatus('idle')}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass p-8 md:p-12 rounded-3xl max-w-md w-full text-center shadow-2xl"
            >
              <button 
                onClick={() => setStatus('idle')}
                className="absolute top-4 right-4 p-2 text-neutral hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <PartyPopper size={40} />
              </div>
              
              <h4 className="text-3xl font-bold mb-4">Message Sent!</h4>
              <p className="text-neutral text-lg mb-8">
                Thank you for reaching out, Rakesh! Your message has been received. I'll get back to you as soon as possible.
              </p>
              
              <button
                onClick={() => setStatus('idle')}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-orange-600 transition-colors"
              >
                Awesome!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
