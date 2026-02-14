import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    return (
        <footer className="py-12 bg-industrial-gray border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <p className="text-industrial-silver font-technical text-sm mb-2">
                        © {new Date().getFullYear()} MAHAVISHVA - MECHANICAL SYSTEMS ARCHITECT
                    </p>
                    <p className="text-[10px] text-industrial-silver/40 uppercase tracking-[0.3em]">
                        Developed by Drag Innovation
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    <a href={portfolioData.social.github} target="_blank" rel="noreferrer" className="text-industrial-silver hover:text-industrial-accent uppercase text-[10px] font-bold tracking-widest transition-colors">Github</a>
                    <a href={portfolioData.social.linkedin} target="_blank" rel="noreferrer" className="text-industrial-silver hover:text-industrial-accent uppercase text-[10px] font-bold tracking-widest transition-colors">Linkedin</a>
                    <a href={portfolioData.social.instagram} target="_blank" rel="noreferrer" className="text-industrial-silver hover:text-industrial-accent uppercase text-[10px] font-bold tracking-widest transition-colors">Instagram</a>
                    <a href={portfolioData.social.twitter} target="_blank" rel="noreferrer" className="text-industrial-silver hover:text-industrial-accent uppercase text-[10px] font-bold tracking-widest transition-colors">X (Twitter)</a>
                    <a href="#about" className="text-industrial-silver hover:text-industrial-accent uppercase text-[10px] font-bold tracking-widest transition-colors">Archive</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
