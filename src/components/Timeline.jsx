import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Briefcase } from 'lucide-react';

const Timeline = () => {
    return (
        <section id="timeline" className="py-24 bg-industrial-metal relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-widest">
                        Service <span className="text-industrial-warning">History</span>
                    </h2>
                    <div className="w-20 h-1 bg-industrial-warning mx-auto"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-industrial-gray -translate-x-1/2 md:block hidden"></div>

                    <div className="space-y-12">
                        {portfolioData.timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 w-full relative">
                                    {/* Mobile indicator line fragment */}
                                    <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-industrial-gray/50 -translate-x-1/2"></div>

                                    <div className={`p-5 md:p-6 bg-industrial-gray border border-white/5 rounded-sm hover:border-industrial-warning/30 transition-all ${index % 2 === 0 ? 'md:text-left text-left pl-16 md:pl-6' : 'md:text-right text-left pl-16 md:pl-6'}`}>
                                        <div className="flex items-center gap-3 mb-2 md:block">
                                            {/* Mobile Node - clearly separated from text */}
                                            <div className="md:hidden w-8 h-8 bg-industrial-gray border-2 border-industrial-warning rounded-full flex items-center justify-center shrink-0">
                                                {item.type === 'education' ? <GraduationCap size={14} className="text-industrial-warning" /> : <Briefcase size={14} className="text-industrial-warning" />}
                                            </div>
                                            <span className="text-industrial-warning font-technical text-sm font-bold uppercase tracking-widest">{item.year}</span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-1 uppercase tracking-wider">{item.title}</h3>
                                        <h4 className="text-industrial-accent text-[10px] md:text-xs font-technical uppercase tracking-widest mb-4 font-bold">{item.institution}</h4>
                                        <p className="text-industrial-silver text-xs md:text-sm font-technical leading-relaxed">{item.description}</p>
                                    </div>
                                </div>

                                {/* Desktop Center Node */}
                                <div className="hidden md:flex relative z-10 w-12 h-12 bg-industrial-gray border-2 border-industrial-warning rounded-full items-center justify-center shrink-0">
                                    {item.type === 'education' ? <GraduationCap size={20} className="text-industrial-warning" /> : <Briefcase size={20} className="text-industrial-warning" />}
                                </div>

                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
