import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Settings, Cpu, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-industrial-gray pt-20">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Animated Gears Decoration */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -left-20 text-industrial-metal opacity-20"
            >
                <Settings size={300} strokeWidth={1} />
            </motion.div>

            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -right-20 text-industrial-metal opacity-20"
            >
                <Settings size={250} strokeWidth={1} />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-industrial-accent/30 bg-industrial-accent/10 text-industrial-accent mb-6 text-sm font-technical uppercase tracking-widest">
                        <Cpu size={16} />
                        <span>Pre-Final Year Mechanical Student</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-white tracking-tighter">
                        {portfolioData.name.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.5 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>

                    <p className="text-lg md:text-2xl text-industrial-silver max-w-2xl mx-auto mb-10 font-technical leading-relaxed px-4">
                        {portfolioData.specialization}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-industrial-accent text-white font-bold rounded-sm shadow-glow hover:bg-blue-600 transition-colors uppercase tracking-widest text-sm"
                        >
                            View Prototypes
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 border border-industrial-silver text-industrial-silver font-bold rounded-sm hover:border-white hover:text-white transition-all uppercase tracking-widest text-sm"
                        >
                            Get Technical Spec
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-industrial-accent opacity-50"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
