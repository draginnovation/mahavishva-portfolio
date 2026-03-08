import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Cpu, Calendar, ShieldCheck, Settings } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-industrial-black border border-white/5 rounded-sm overflow-hidden hover:border-industrial-warning/50 transition-all duration-500 flex flex-col relative"
        >
            {/* Permanent Technical Schematic Thumbnail */}
            <div className="aspect-video relative overflow-hidden bg-industrial-black p-6 flex flex-col justify-center border-b border-white/5">
                {/* Visual Grid / Blueprint Background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-industrial-accent/10 to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4 text-industrial-warning border-b border-industrial-warning/20 pb-2">
                        <Cpu size={16} />
                        <h4 className="font-bold uppercase tracking-tighter text-[10px]">Technical Schematic</h4>
                    </div>
                    <ul className="text-white/80 text-[11px] font-technical space-y-2">
                        {project.tech.map((t, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-industrial-warning rounded-full shadow-[0_0_5px_rgba(255,193,7,0.5)]"></div>
                                {t}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[8px] text-white/30 uppercase tracking-[0.2em] font-technical">
                        <span>System ID: PRJ-{index + 101}</span>
                        <Settings size={10} className="animate-spin-slow" />
                    </div>
                </div>

                {/* Industrial Corner Decals */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/10"></div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex-1 flex flex-col bg-industrial-gray/30">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-industrial-warning font-technical text-[9px] uppercase tracking-[0.2em] opacity-70">
                        <Calendar size={12} />
                        <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-industrial-silver font-technical text-[9px] uppercase tracking-widest opacity-50">
                         <ShieldCheck size={12} />
                         <span>{project.organization}</span>
                    </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase tracking-wider group-hover:text-industrial-warning transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-industrial-silver text-xs md:text-sm mb-8 line-clamp-3 font-technical leading-relaxed opacity-70">
                    {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 text-[8px] bg-industrial-metal text-industrial-silver/60 rounded-sm uppercase tracking-widest border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <motion.a
                        href={project.link}
                        whileHover={{ x: 5 }}
                        className="bg-industrial-warning/5 p-2 rounded-sm text-industrial-warning hover:bg-industrial-warning hover:text-black transition-all border border-industrial-warning/20"
                    >
                        <ExternalLink size={16} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-industrial-metal relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-accent/5 -skew-x-12 transform translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-[0.2em]">
                            System <span className="text-industrial-warning">Blueprints</span>
                        </h2>
                        <div className="w-20 h-1 bg-industrial-warning"></div>
                    </div>
                    <p className="text-industrial-silver font-technical max-w-md opacity-70">
                        A repository of mechanical prototypes and industrial systems designed for high-performance and efficiency.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
