import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-industrial-gray relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-industrial-accent pl-6 uppercase tracking-wider">
                            Establish <span className="text-industrial-accent">Link</span>
                        </h2>
                        <p className="text-industrial-silver mb-12 font-technical text-lg">
                            Interested in collaboration or have a technical query? Reach out for professional consultation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-industrial-metal border border-white/5 rounded-sm flex items-center justify-center text-industrial-accent group-hover:border-industrial-accent/50 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs text-industrial-silver uppercase tracking-widest mb-1 font-bold">Email Channel</h4>
                                    <p className="text-white font-technical">{portfolioData.social.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-industrial-metal border border-white/5 rounded-sm flex items-center justify-center text-industrial-accent group-hover:border-industrial-accent/50 transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs text-industrial-silver uppercase tracking-widest mb-1 font-bold">Mobile Link</h4>
                                    <p className="text-white font-technical">{portfolioData.social.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-industrial-metal border border-white/5 rounded-sm flex items-center justify-center text-industrial-accent group-hover:border-industrial-accent/50 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs text-industrial-silver uppercase tracking-widest mb-1 font-bold">Base Location</h4>
                                    <p className="text-white font-technical">{portfolioData.social.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-industrial-metal border border-white/5 rounded-sm shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-industrial-silver uppercase tracking-widest font-bold">Identification</label>
                                    <input
                                        type="text"
                                        placeholder="ENTER NAME"
                                        className="w-full bg-industrial-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:border-industrial-accent outline-none font-technical placeholder:text-white/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-industrial-silver uppercase tracking-widest font-bold">Return Address</label>
                                    <input
                                        type="email"
                                        placeholder="ENTER EMAIL"
                                        className="w-full bg-industrial-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:border-industrial-accent outline-none font-technical placeholder:text-white/20"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-industrial-silver uppercase tracking-widest font-bold">Technical Description</label>
                                <textarea
                                    rows="4"
                                    placeholder="ENTER PROJECT DETAILS..."
                                    className="w-full bg-industrial-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:border-industrial-accent outline-none font-technical placeholder:text-white/20 resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-industrial-accent text-white font-bold rounded-sm shadow-glow flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                            >
                                Transmit Message
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
