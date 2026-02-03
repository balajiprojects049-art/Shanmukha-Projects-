import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null); // For mobile dropdown toggle
    const location = useLocation();

    // Gov style accessibility tools
    const [fontSize, setFontSize] = useState(1); // 1 = normal

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'ZED Certification', path: '/zed-certification' },
        { name: 'Careers', path: '/careers' },
        {
            name: 'Events & Media',
            path: '#',
            dropdown: [
                { name: 'National Quality Conclave', path: '/conclave-2025' },
                { name: 'Gallery', path: '/gallery' }
            ]
        },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isActive = (link) => {
        if (link.path === location.pathname) return true;
        if (link.dropdown) {
            return link.dropdown.some(dropItem => dropItem.path === location.pathname);
        }
        return false;
    };

    const toggleMobileDropdown = (name) => {
        if (dropdownOpen === name) {
            setDropdownOpen(null);
        } else {
            setDropdownOpen(name);
        }
    };

    return (
        <header className="w-full flex-col font-sans relative z-50">
            {/* 1. GOV TOP BAR (Accessibility & Utils) */}
            <div className="bg-[#f0f0f0] border-b border-gray-300 text-[#333333] py-1 px-2 text-[11px] md:text-xs">
                <div className="max-w-7xl mx-auto flex justify-end items-center gap-4 split-nav">
                    <div className="hidden md:flex items-center gap-3 border-r border-gray-400 pr-3">
                        <span className="hover:underline cursor-pointer font-medium">Skip to Main Content</span>
                        <span className="text-gray-400">|</span>
                        <span className="hover:underline cursor-pointer font-medium">Screen Reader Access</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <span className="cursor-pointer hover:bg-gray-200 px-1.5 py-0.5 border border-gray-300 rounded font-bold" onClick={() => setFontSize(0.9)}>A-</span>
                            <span className="cursor-pointer hover:bg-gray-200 px-1.5 py-0.5 border border-gray-300 rounded font-bold" onClick={() => setFontSize(1)}>A</span>
                            <span className="cursor-pointer hover:bg-gray-200 px-1.5 py-0.5 border border-gray-300 rounded font-bold" onClick={() => setFontSize(1.1)}>A+</span>
                        </div>
                        <div className="flex border border-gray-400 rounded overflow-hidden">
                            <span className="bg-black text-white px-2 py-0.5 cursor-pointer text-[10px]">A</span>
                            <span className="bg-white text-black px-2 py-0.5 cursor-pointer hover:bg-gray-100 text-[10px]">A</span>
                        </div>
                        <div className="flex items-center gap-2 ml-2">
                            <span className="hover:underline cursor-pointer font-bold border-r border-gray-400 pr-2">English</span>
                            <span className="hover:underline cursor-pointer font-medium">हिन्दी</span>
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
                            <li key={link.name} className="group relative h-full">
                                {link.dropdown ? (
                                    <>
                                        <button
                                            className={`flex items-center gap-1 h-full px-6 py-4 text-sm font-bold tracking-wide uppercase transition-colors 
                                                ${isActive(link) ? 'bg-[#f39200] text-white' : 'hover:bg-[#005da3] text-white'}`}
                                        >
                                            {link.name}
                                            <ChevronDown size={14} />
                                        </button>
                                        <ul className="absolute left-0 top-full w-56 bg-white text-gray-800 shadow-xl border-t-4 border-[#f39200] hidden group-hover:block animate-fade-in z-50">
                                            {link.dropdown.map((dropLink) => (
                                                <li key={dropLink.path} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                                                    <Link to={dropLink.path} className="block px-4 py-3 text-sm font-semibold hover:text-[#003366]">
                                                        {dropLink.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`inline-block h-full px-6 py-4 text-sm font-bold tracking-wide uppercase transition-colors
                                            ${isActive(link)
                                                ? 'bg-[#f39200] text-white' // Active: Saffron background
                                                : 'hover:bg-[#005da3] text-white' // Hover: Lighter Blue
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Dropdown */}
                    <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
                        <ul className="flex flex-col py-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    {link.dropdown ? (
                                        <div>
                                            <button
                                                onClick={() => toggleMobileDropdown(link.name)}
                                                className={`w-full flex justify-between items-center px-4 py-3 border-l-4 text-sm font-bold uppercase transition-colors
                                                    ${isActive(link)
                                                        ? 'border-yellow-400 bg-blue-800 text-yellow-500'
                                                        : 'border-transparent hover:bg-blue-800 text-gray-100'}`}
                                            >
                                                {link.name}
                                                <ChevronDown size={16} className={`transform transition-transform ${dropdownOpen === link.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div className={`bg-[#002244] overflow-hidden transition-all duration-300 ${dropdownOpen === link.name ? 'max-h-40' : 'max-h-0'}`}>
                                                <ul>
                                                    {link.dropdown.map((dropLink) => (
                                                        <li key={dropLink.path}>
                                                            <Link
                                                                to={dropLink.path}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block pl-8 pr-4 py-3 text-xs font-bold uppercase text-gray-300 hover:text-white border-l-4 border-transparent hover:border-yellow-400"
                                                            >
                                                                {dropLink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 border-l-4 text-sm font-bold uppercase ${isActive(link)
                                                ? 'border-yellow-400 bg-blue-800 text-yellow-400'
                                                : 'border-transparent hover:bg-blue-800 text-gray-100'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Navbar;
