import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Manual', href: '#about' },
        { name: 'Toolkit', href: '#skills' },
        { name: 'History', href: '#timeline' },
        { name: 'Roll', href: '#achievements' },
        { name: 'Prototypes', href: '#projects' },
        { name: 'Link', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-industrial-gray/90 backdrop-blur-md py-4 shadow-metallic' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 group"
                >
                    <motion.div
                        animate={{ rotate: scrolled ? 180 : 0 }}
                        className="text-industrial-accent"
                    >
                        <Settings size={28} strokeWidth={1.5} />
                    </motion.div>
                    <span className="text-lg md:text-xl font-bold text-white tracking-widest uppercase font-technical">
                        MAHAVISHVA S<span className="text-industrial-accent italic underline decoration-industrial-warning underline-offset-4">.EXE</span>
                    </span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xs font-bold text-industrial-silver hover:text-industrial-accent uppercase tracking-[0.2em] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-industrial-accent group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}
                    <motion.a
                        href="https://linkedin.com"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-6 py-2 border-2 border-industrial-accent text-industrial-accent text-xs font-bold uppercase tracking-widest hover:bg-industrial-accent hover:text-white transition-all"
                    >
                        Connect
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-industrial-gray flex flex-col items-center justify-center gap-10 z-40 md:hidden"
                    >
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold text-white uppercase tracking-widest hover:text-industrial-accent transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={portfolioData.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer" // Added for security best practice with target="_blank"
                            className="px-10 py-4 bg-industrial-accent text-white font-bold uppercase tracking-widest"
                        >
                            Connect
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
