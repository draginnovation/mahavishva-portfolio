import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'sending', 'success'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            alert('Please fill in all fields before transmitting.');
            return;
        }

        setStatus('sending');

        const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
        const body = encodeURIComponent(
            `Project Protocol: INQUIRY-${Date.now().toString().slice(-4)}\n` +
            `Origin: ${name} (${email})\n\n` +
            `Content:\n${message}\n\n` +
            `--- End of Transmission ---`
        );
        
        // Trigger mailto
        window.location.href = `mailto:${portfolioData.social.email}?subject=${subject}&body=${body}`;
        
        // Provide feedback and reset
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            // Clear status after 5 seconds
            setTimeout(() => setStatus(''), 5000);
        }, 800);
    };

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
                        className="p-6 md:p-10 bg-industrial-metal border border-white/5 rounded-sm shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-industrial-silver uppercase tracking-widest font-bold">Identification</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="ENTER NAME"
                                        required
                                        className="w-full bg-industrial-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:border-industrial-accent outline-none font-technical placeholder:text-white/20 text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-industrial-silver uppercase tracking-widest font-bold">Return Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="ENTER EMAIL"
                                        required
                                        className="w-full bg-industrial-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:border-industrial-accent outline-none font-technical placeholder:text-white/20 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-industrial-silver uppercase tracking-widest font-bold">Technical Description</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="ENTER PROJECT DETAILS..."
                                    required
                                    className="w-full bg-industrial-gray border border-white/10 rounded-sm px-4 py-3 text-white focus:border-industrial-accent outline-none font-technical placeholder:text-white/20 resize-none text-sm"
                                ></textarea>
                            </div>

                            <AnimatePresence>
                                {status && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`p-3 rounded-sm font-technical text-[10px] uppercase tracking-widest flex items-center gap-2 border ${
                                            status === 'success' 
                                            ? 'bg-industrial-accent/10 border-industrial-accent/50 text-industrial-accent' 
                                            : 'bg-industrial-warning/10 border-industrial-warning/50 text-industrial-warning'
                                        }`}
                                    >
                                        <div className={`size-1.5 rounded-full ${status === 'success' ? 'bg-industrial-accent' : 'bg-industrial-warning animate-pulse'}`}></div>
                                        {status === 'success' ? 'Transmission Successful - Links Established' : 'Connecting to Mail Server...'}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 font-bold rounded-sm shadow-glow flex items-center justify-center gap-3 uppercase tracking-widest text-xs md:text-sm transition-all ${
                                    status === 'sending' 
                                    ? 'bg-industrial-metal text-white/50 cursor-not-allowed' 
                                    : 'bg-industrial-accent text-white hover:bg-industrial-accent/90'
                                }`}
                            >
                                {status === 'sending' ? 'Transmitting...' : 'Transmit Message'}
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
