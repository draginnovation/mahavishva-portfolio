import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-industrial-gray relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-widest">
                        Core <span className="text-industrial-accent">Toolkit</span>
                    </h2>
                    <div className="w-20 h-1 bg-industrial-accent mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-industrial-metal border border-white/5 rounded-sm hover:border-industrial-accent/50 transition-all group"
                        >
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-sm text-industrial-accent font-technical uppercase tracking-widest font-bold">{skill.category}</span>
                                <span className="text-2xl font-bold text-white font-technical">{skill.level}%</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">{skill.name}</h3>

                            <div className="h-2 bg-industrial-gray rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-industrial-accent to-blue-400"
                                ></motion.div>
                            </div>

                            <div className="mt-6 flex gap-2">
                                {[...Array(10)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1 flex-1 rounded-full ${i < skill.level / 10 ? 'bg-industrial-accent/40' : 'bg-white/5'}`}
                                    ></div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
