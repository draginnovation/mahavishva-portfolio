import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Layers } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-industrial-metal relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-accent/5 -skew-x-12 transform translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-widest">
                            Design <span className="text-industrial-warning">Prototypes</span>
                        </h2>
                        <div className="w-20 h-1 bg-industrial-warning"></div>
                    </div>
                    <p className="text-industrial-silver font-technical max-w-md">
                        A selection of mechanical systems and experimental modules developed during my engineering journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-industrial-gray border border-white/5 rounded-sm overflow-hidden hover:border-industrial-warning/50 transition-all duration-500 flex flex-col"
                        >
                            <div className="aspect-video bg-industrial-metal relative overflow-hidden flex items-center justify-center p-8">
                                <Layers size={60} className="text-industrial-silver/20 group-hover:scale-110 group-hover:text-industrial-warning/30 transition-all duration-700" />

                                {/* Overlay with technical specs */}
                                <div className="absolute inset-0 bg-industrial-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center px-10">
                                    <h4 className="text-white font-bold mb-2 uppercase tracking-tighter text-xs">Technical Specs:</h4>
                                    <ul className="text-white/90 text-sm font-technical space-y-1">
                                        {project.tech.map((t, i) => (
                                            <li key={i}>• {t}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-industrial-warning transition-colors line-clamp-1">
                                    {project.title}
                                </h3>
                                <p className="text-industrial-silver text-sm mb-8 line-clamp-3 font-technical leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {project.tech.slice(0, 2).map((tag, i) => (
                                            <span key={i} className="px-2 py-1 text-[10px] bg-white/5 text-industrial-silver rounded-sm uppercase tracking-widest border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <motion.a
                                        href={project.link}
                                        whileHover={{ x: 5 }}
                                        className="text-industrial-warning hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
