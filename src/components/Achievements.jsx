import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 bg-industrial-gray relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-industrial-accent/50 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-[0.3em]">
                        Honor <span className="text-industrial-accent">Roll</span>
                    </h2>
                    <div className="w-24 h-1 bg-industrial-accent mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-industrial-metal p-8 border border-white/5 rounded-sm relative group hover:border-industrial-accent/40 transition-all duration-500"
                        >
                            <div className="absolute top-4 right-4 text-industrial-accent opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
                                {index === 0 ? <Trophy size={40} /> : index === 1 ? <ShieldCheck size={40} /> : <Award size={40} />}
                            </div>

                            <div className="flex items-center gap-2 mb-6 text-industrial-accent font-technical text-xs font-bold uppercase tracking-widest">
                                <Star size={14} fill="currentColor" />
                                <span>{item.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider group-hover:text-industrial-accent transition-colors">
                                {item.title}
                            </h3>
                            <h4 className="text-industrial-silver text-xs font-technical uppercase tracking-widest mb-6 opacity-70">
                                {item.organization}
                            </h4>

                            <p className="text-industrial-silver text-sm font-technical leading-relaxed">
                                {item.description}
                            </p>

                            {/* Decorative meter element */}
                            <div className="mt-8 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`h-1.5 flex-1 ${i === 4 ? 'bg-industrial-accent' : 'bg-industrial-accent/30'}`}></div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Industrial watermark link to Drive mentioned by user */}
                <div className="mt-20 p-8 border border-industrial-accent/20 bg-industrial-accent/5 rounded-sm text-center">
                    <p className="text-industrial-silver font-technical text-xs uppercase tracking-[0.2em] mb-4">
                        Data Synchronized with Master Repository
                    </p>
                    <a
                        href="https://drive.google.com/drive/folders/1esXzRqO23MPourATKbBQH_LoISoDaUXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-industrial-accent hover:text-white transition-colors font-bold uppercase tracking-[0.3em] text-[10px]"
                    >
                        <ShieldCheck size={16} />
                        Access Full Credentials Vault
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
