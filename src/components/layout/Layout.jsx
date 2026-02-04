import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../WhatsAppButton';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] font-sans text-[#1a202c]">
            <Navbar />
            <main id="main-content" className="flex-grow">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
