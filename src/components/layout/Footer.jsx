import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#002244] text-white pt-12 pb-6 border-t-4 border-[#f39200]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Column 1: Organization Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide border-b border-gray-600 pb-2 inline-block">SHANMUKHA PROJECTS</h3>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed text-justify">
                            Leading provider of MSME strategies, ZED Certification guidance, and Government contract services in Andhra Pradesh.
                            Bridging the gap between government schemes and beneficiaries.
                        </p>
                        <div className="bg-[#003366] p-3 border border-gray-600 inline-block">
                            <span className="text-xs text-gray-300 block uppercase tracking-wide">UDYAM Registration</span>
                            <span className="font-mono text-[#f39200] font-bold tracking-wide">UDYAM-AP-13-0078844</span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#f39200] uppercase tracking-wide border-b border-gray-600 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'ZED Certification', path: '/zed-certification' },
                                { name: 'Careers', path: '/careers' },
                                { name: 'Contact Us', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-300 hover:text-white hover:underline transition-all duration-300 flex items-center text-sm">
                                        <ChevronRight size={14} className="mr-1 text-[#138808]" /> {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#f39200] uppercase tracking-wide border-b border-gray-600 pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300 text-sm">
                                <MapPin size={18} className="text-[#138808] mt-1 shrink-0" />
                                <span>
                                    3rd Floor, Sai Complex,<br />
                                    Dharavari Thota, Ongole,<br />
                                    Prakasam District,<br />
                                    Andhra Pradesh – 523001
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300 text-sm">
                                <Phone size={18} className="text-[#138808] shrink-0" />
                                <span>+91-9666066663</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300 text-sm">
                                <Mail size={18} className="text-[#138808] shrink-0" />
                                <span>info@shanmukhaprojects.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-700 my-6" />

                {/* Disclaimer & Copyright */}
                <div className="text-center">
                    <p className="text-xs text-gray-400 italic mb-4 max-w-4xl mx-auto border border-gray-700 p-2 bg-[#001b36]">
                        Disclaimer: Shanmukha Projects is an <strong>Authorized Partner / Facilitator</strong> for various government schemes.
                        We are a private organization assisting MSMEs and individuals. We do NOT claim to be a government department.
                    </p>
                    <div className="text-sm text-gray-400 flex flex-col md:flex-row justify-center items-center gap-2">
                        <span>© {new Date().getFullYear()} Shanmukha Projects. All Rights Reserved.</span>
                        <span className="hidden md:block">|</span>
                        <span>Designed & Developed with adherence to GIGW Guidelines.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
