import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Anchor, Zap, Box } from 'lucide-react';

const About = () => {
    const stats = [
        { label: "CGPA", value: "8.5+", icon: <Zap className="text-industrial-warning" /> },
        { label: "Projects", value: "10+", icon: <Box className="text-industrial-accent" /> },
        { label: "Experience", value: "Pre-Final", icon: <Anchor className="text-industrial-silver" /> },
    ];

    return (
        <section id="about" className="py-24 bg-industrial-metal relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-industrial-warning pl-6 uppercase tracking-wider">
                            Engineering <span className="text-industrial-warning">Manual</span>
                        </h2>
                        <p className="text-industrial-silver text-lg leading-relaxed mb-8 font-technical">
                            {portfolioData.about}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-4 bg-industrial-gray border border-white/5 rounded-sm flex flex-col items-center sm:items-start">
                                    <div className="mb-2">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-industrial-silver uppercase tracking-tighter">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-industrial-gray rounded-sm border border-industrial-accent/20 flex items-center justify-center group overflow-hidden">
                            {/* This would be an engineering schematic or a photo of the student */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"></div>
                            <div className="relative z-10 p-12 text-center">
                                <div className="w-24 h-24 mx-auto mb-6 border-2 border-industrial-accent rounded-full flex items-center justify-center">
                                    <Box size={40} className="text-industrial-accent animate-pulse" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest font-technical">Module: Mahavishva</h3>
                                <p className="text-industrial-accent text-sm font-technical uppercase tracking-widest font-bold">Status: Online / Pre-final</p>
                            </div>

                            {/* Decorative corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-industrial-accent"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-industrial-accent"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-industrial-accent"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-industrial-accent"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
