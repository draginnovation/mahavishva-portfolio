import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getFileUrl = (path) => {
    if (!path) return '';
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    // Standardize URL formatting and encode characters
    return `${baseUrl}${encodeURI(cleanPath)}`;
};

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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {portfolioData.achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-industrial-metal p-6 md:p-8 border border-white/5 rounded-sm relative group hover:border-industrial-accent/40 transition-all duration-500"
                        >
                            <div className="absolute top-4 right-4 text-industrial-accent opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
                                {item.type === 'pdf' ? <Trophy className="size-8 md:size-10" /> : <Award className="size-8 md:size-10" />}
                            </div>

                            <div className="flex items-center gap-2 mb-6 text-industrial-accent font-technical text-xs font-bold uppercase tracking-widest">
                                <Star size={14} fill="currentColor" />
                                <span>{item.date}</span>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 uppercase tracking-wider group-hover:text-industrial-accent transition-colors line-clamp-2">
                                {item.title}
                            </h3>
                            <h4 className="text-industrial-silver text-[10px] md:text-xs font-technical uppercase tracking-widest mb-4 opacity-70">
                                {item.organization}
                            </h4>

                            {item.type === 'image' && item.file ? (
                                <div className="mb-6 relative w-full h-56 overflow-hidden rounded border border-white/10 group-hover:border-industrial-accent/50 transition-colors bg-industrial-black/20 flex items-center justify-center">
                                    <img 
                                        src={getFileUrl(item.file)} 
                                        alt={item.title} 
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                            ) : null}

                            {item.type === 'pdf' && item.file ? (
                                <div className="mb-6 relative w-full h-56 overflow-hidden rounded border border-white/10 group-hover:border-industrial-accent/50 transition-colors bg-industrial-black flex items-center justify-center">
                                    <img 
                                        src={getFileUrl(item.file.replace('.pdf', '-1.jpg'))} 
                                        alt={`${item.title} Preview`} 
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                                    />
                                    {/* Mobile indicator */}
                                    <div className="absolute inset-0 bg-industrial-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
                                        <FileText className="text-industrial-accent" size={32} />
                                    </div>
                                </div>
                            ) : null}

                            <p className="text-industrial-silver text-xs md:text-sm font-technical leading-relaxed mb-6 line-clamp-3">
                                {item.description}
                            </p>

                            {item.type === 'pdf' && item.file && (
                                <a 
                                    href={getFileUrl(item.file)} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-industrial-accent hover:text-white border border-industrial-accent hover:bg-industrial-accent/20 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition-all mt-auto"
                                >
                                    <ShieldCheck size={16} />
                                    View Certificate
                                </a>
                            )}
                            
                            {item.type === 'image' && item.file && (
                                <a 
                                    href={getFileUrl(item.file)} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-industrial-accent hover:text-white border border-industrial-accent hover:bg-industrial-accent/20 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition-all mt-auto"
                                >
                                    <Star size={16} />
                                    View Image
                                </a>
                            )}

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
                <div className="mt-20 p-6 md:p-8 border border-industrial-accent/20 bg-industrial-accent/5 rounded-sm text-center">
                    <p className="text-industrial-silver font-technical text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 px-4">
                        Data Synchronized with Master Repository
                    </p>
                    <a
                        href="https://drive.google.com/drive/folders/1esXzRqO23MPourATKbBQH_LoISoDaUXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-industrial-accent hover:text-white transition-colors font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px]"
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
