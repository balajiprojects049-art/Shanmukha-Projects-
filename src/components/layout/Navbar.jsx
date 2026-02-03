import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Gov style accessibility tools
    const [fontSize, setFontSize] = useState(1); // 1 = normal

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'ZED Certification', path: '/zed-certification' },
        { name: 'Careers', path: '/careers' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="w-full flex-col font-sans relative z-50">
            {/* 1. GOV TOP BAR (Accessibility & Utils) */}
            <div className="bg-[#1b1b1b] text-white py-1.5 px-2 text-[11px] md:text-xs">
                <div className="max-w-7xl mx-auto flex justify-end items-center gap-4 split-nav">
                    <div className="hidden md:flex items-center gap-3 border-r border-gray-600 pr-3">
                        <span className="hover:underline cursor-pointer">Skip to Main Content</span>
                        <span>|</span>
                        <span className="hover:underline cursor-pointer">Screen Reader Access</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 bg-gray-700 rounded px-1">
                            <span className="cursor-pointer hover:text-yellow-400 px-1 font-bold" onClick={() => setFontSize(0.9)}>A-</span>
                            <span className="cursor-pointer hover:text-yellow-400 px-1 font-bold" onClick={() => setFontSize(1)}>A</span>
                            <span className="cursor-pointer hover:text-yellow-400 px-1 font-bold" onClick={() => setFontSize(1.1)}>A+</span>
                        </div>
                        <div className="flex border border-gray-500 rounded overflow-hidden">
                            <span className="bg-gray-800 px-2 py-0.5 cursor-pointer hover:bg-gray-700">A</span>
                            <span className="bg-white text-black px-2 py-0.5 cursor-pointer hover:bg-gray-200">A</span>
                        </div>
                        <div className="flex items-center gap-2 ml-2">
                            <span className="hover:underline cursor-pointer font-bold">English</span>
                            <span>|</span>
                            <span className="hover:underline cursor-pointer">हिन्दी</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. BRANDING HEADER (White Background, Logos) */}
            <div className="bg-white shadow-sm py-2 md:py-4 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Main Logo & Title */}
                    <Link to="/" className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
                        <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center">
                            <img src="/images/logo.png" alt="Shanmukha Projects Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col text-center md:text-left">
                            <h1 className="font-bold text-[#003366] text-lg md:text-2xl leading-tight uppercase tracking-tight">
                                Shanmukha Projects
                            </h1>
                            <p className="text-xs md:text-sm text-gray-800 font-semibold max-w-md">
                                State & Central Government Contract & Project Services
                            </p>
                            <p className="text-[10px] md:text-xs text-green-700 font-medium mt-1">
                                An Authorized Facilitator for MSME Schemes (UDYAM-AP-13-0078844)
                            </p>
                        </div>
                    </Link>

                    {/* Partner Emblems (Right Side) */}
                    <div className="hidden lg:flex items-center gap-6 grayscale opacity-90">
                        {/* Placeholder for Emblems - simulating the 'Azadi Ka Amrit' / 'G20' / 'Swachh Bharat' look often seen */}
                        <div className="flex flex-col items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/200px-Government_of_India_logo.svg.png" alt="Govt Emblem" className="h-14 w-auto object-contain mb-1" />
                            <span className="text-[10px] font-bold text-gray-600">Facilitator</span>
                        </div>
                        <div className="h-12 w-[1px] bg-gray-300"></div>
                        <div className="flex flex-col items-center">
                            {/* We don't have these images, using text styling to mimic standard gov headers */}
                            <span className="text-xl font-black text-orange-500 tracking-tighter">MSME</span>
                            <span className="text-[10px] uppercase font-bold text-green-700">ZED Certification</span>
                        </div>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700">
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. NAVIGATION BAR (Solid Color) */}
            <nav className="bg-[#003366] text-white shadow-md relative z-10 border-t-4 border-orange-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex flex-wrap">
                        {navLinks.map((link) => (
                            <li key={link.path} className="group relative">
                                <Link
                                    to={link.path}
                                    className={`inline-block px-5 py-3 text-sm font-medium tracking-wide uppercase transition-colors
                                        ${isActive(link.path)
                                            ? 'bg-[#002244] text-yellow-400 border-b-4 border-yellow-400'
                                            : 'hover:bg-[#004080] text-white border-b-4 border-transparent'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Dropdown */}
                    <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                        <ul className="flex flex-col py-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 border-l-4 text-sm font-bold uppercase ${isActive(link.path)
                                                ? 'border-yellow-400 bg-blue-800 text-yellow-400'
                                                : 'border-transparent hover:bg-blue-800 text-gray-100'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
