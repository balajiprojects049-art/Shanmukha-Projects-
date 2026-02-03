import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans">
            {/* Page Header */}
            <div className="bg-[#45b1b8] text-white py-16 md:py-20 border-b-4 border-[#a5d63f] relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">Get in Touch</h1>
                    <div className="h-1 w-20 bg-[#a5d63f] mx-auto mb-6"></div>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
                        Contact us for expert ZED Certification guidance and Government Project facilitation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info & Map */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a202c] mb-8 border-l-4 border-[#45b1b8] pl-4 uppercase tracking-tight">Our Location</h2>
                            <div className="bg-white p-8 rounded-sm shadow-xl border border-gray-100 space-y-8">
                                <div className="flex items-start gap-5 pb-8 border-b border-gray-100">
                                    <div className="bg-[#45b1b8] p-4 rounded-full text-white shadow-md">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-[#1a5d62] mb-2 uppercase tracking-widest text-xs">Headquarters</h3>
                                        <p className="text-gray-700 leading-relaxed font-medium">
                                            3rd Floor, Sai Complex,<br />
                                            Dharavari Thota, Ongole,<br />
                                            Prakasam District,<br />
                                            Andhra Pradesh – 523001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 pb-8 border-b border-gray-100">
                                    <div className="bg-[#a5d63f] p-4 rounded-full text-white shadow-md">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-[#1a5d62] mb-2 uppercase tracking-widest text-xs">Phone</h3>
                                        <p className="text-gray-900 font-black text-2xl tracking-tighter">+91 91771 14444</p>
                                        <p className="text-gray-500 text-xs mt-1 font-bold uppercase tracking-widest">(Mon-Sat, 9 AM - 6 PM)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="bg-[#45b1b8] p-4 rounded-full text-white shadow-md">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-[#1a5d62] mb-2 uppercase tracking-widest text-xs">Email</h3>
                                        <p className="text-gray-700 font-bold text-lg">contact@shanmukhaprojects.com</p>
                                        <p className="text-teal-600 font-bold text-sm">support@shanmukhaprojects.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-sm overflow-hidden shadow-2xl border-4 border-white h-96 relative">
                            <iframe
                                title="Shanmukha Projects Ongole"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.914594248476!2d80.03819894709425!3d15.512349001601735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01620d43c3bf%3A0x673172e259e51c89!2sOngole%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div className="bg-white p-10 rounded-sm shadow-2xl border border-gray-100 border-t-8 border-t-[#45b1b8]">
                            <div className="mb-10">
                                <h2 className="text-3xl font-black text-[#1a202c] mb-2 uppercase tracking-tight">Send a Message</h2>
                                <p className="text-gray-500 font-medium">We usually respond within 24 business hours.</p>
                                <div className="w-16 h-1 bg-[#a5d63f] mt-4"></div>
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase text-[#1a5d62] tracking-[0.2em]">Full Name</label>
                                        <input type="text" className="w-full px-5 py-4 rounded-sm border-2 border-gray-100 focus:border-[#45b1b8] outline-none transition-all bg-gray-50/50 font-medium" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase text-[#1a5d62] tracking-[0.2em]">Phone Number</label>
                                        <input type="tel" className="w-full px-5 py-4 rounded-sm border-2 border-gray-100 focus:border-[#45b1b8] outline-none transition-all bg-gray-50/50 font-medium" placeholder="+91 90000 00000" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase text-[#1a5d62] tracking-[0.2em]">Email Address</label>
                                    <input type="email" className="w-full px-5 py-4 rounded-sm border-2 border-gray-100 focus:border-[#45b1b8] outline-none transition-all bg-gray-50/50 font-medium" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase text-[#1a5d62] tracking-[0.2em]">Inquiry Type</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-4 rounded-sm border-2 border-gray-100 focus:border-[#45b1b8] outline-none transition-all bg-gray-50/50 font-bold appearance-none">
                                            <option>General Inquiry</option>
                                            <option>MSME ZED Certification</option>
                                            <option>Sarpanch Samvaad Support</option>
                                            <option>Govt. Project Collaboration</option>
                                            <option>Jobs & Careers</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <ChevronRight size={18} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase text-[#1a5d62] tracking-[0.2em]">Your Message</label>
                                    <textarea rows="5" className="w-full px-5 py-4 rounded-sm border-2 border-gray-100 focus:border-[#45b1b8] outline-none transition-all bg-gray-50/50 font-medium resize-none" placeholder="Describe your requirement in detail..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-[#45b1b8] text-white font-black py-5 rounded-sm hover:bg-[#1a5d62] transition-all shadow-xl uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-3 group">
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
