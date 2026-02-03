import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronRight, Award } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1a5d62] text-white border-t-8 border-[#a5d63f]">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/images/logo.png" alt="Logo" className="h-12 w-auto brightness-0 invert" />
                            <span className="font-bold text-xl uppercase tracking-tighter">Shanmukha</span>
                        </Link>
                        <div className="h-1 w-10 bg-[#a5d63f] my-4"></div>
                        <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
                            Dedicated facilitators for MSME ZED Certification and quality governance across Andhra Pradesh. Building a Viksit Bharat through grassroots empowerment.
                        </p>
                        <div className="mt-6 p-3 bg-black/10 border border-white/10 rounded-sm">
                            <span className="text-[10px] text-gray-300 block uppercase tracking-wide">Authorized Partner</span>
                            <span className="font-mono text-[#a5d63f] font-bold text-xs tracking-wide">UDYAM-AP-13-0078844</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#a5d63f]">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/about" className="text-gray-200 hover:text-[#a5d63f] transition-colors text-sm font-medium">About Us</Link>
                            <Link to="/services" className="text-gray-200 hover:text-[#a5d63f] transition-colors text-sm font-medium">Our Services</Link>
                            <Link to="/zed-certification" className="text-gray-200 hover:text-[#a5d63f] transition-colors text-sm font-medium">ZED Certification</Link>
                            <Link to="/conclave-2025" className="text-gray-200 hover:text-[#a5d63f] transition-colors text-sm font-medium">National Conclave</Link>
                            <Link to="/contact" className="text-gray-200 hover:text-[#a5d63f] transition-colors text-sm font-medium">Support</Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#a5d63f]">Focus Areas</h4>
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-200 text-sm font-medium border-l-2 border-white/20 pl-3">MSME Development</span>
                            <span className="text-gray-200 text-sm font-medium border-l-2 border-white/20 pl-3">Quality Standards</span>
                            <span className="text-gray-200 text-sm font-medium border-l-2 border-white/20 pl-3">Digital Governance</span>
                            <span className="text-gray-200 text-sm font-medium border-l-2 border-white/20 pl-3">Village Empowerment</span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#a5d63f]">Connect</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 group">
                                <div className="p-2 bg-white/10 group-hover:bg-[#a5d63f] transition-colors rounded-sm">
                                    <Phone size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-200">+91 9177114444</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="p-2 bg-white/10 group-hover:bg-[#a5d63f] transition-colors rounded-sm">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-200">contact@shanmukhaprojects.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <p className="text-xs text-gray-300 italic mb-6 max-w-4xl mx-auto opacity-70">
                        Disclaimer: Shanmukha Projects is an Authorized Partner / Facilitator for various government schemes.
                        We are a private organization and do NOT claim to be a government department.
                    </p>
                    <p className="text-xs text-gray-200 font-medium">
                        &copy; {new Date().getFullYear()} Shanmukha Projects. All Rights Reserved.
                    </p>
                    <div className="flex justify-center gap-6 mt-4 opacity-70">
                        <span className="text-[10px] uppercase font-black text-[#a5d63f]">Quality first</span>
                        <span className="text-[10px] uppercase font-black text-white/50">Zero Defect</span>
                        <span className="text-[10px] uppercase font-black text-white/50">Zero Effect</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
