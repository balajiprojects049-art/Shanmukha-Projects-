import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-[#f8fafc] min-h-screen">
            <div className="bg-[#003366] text-white py-12 md:py-16 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                    Get in touch for ZED Certification and Government Project Support.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#1a202c] mb-8 border-l-4 border-[#f39200] pl-4">Office Address</h2>
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-200 space-y-8">
                            <div className="flex items-start gap-4 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                                <div className="bg-[#138808] p-3 rounded-sm text-white">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#003366] mb-1 uppercase tracking-wide">Head Office</h3>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        3rd Floor, Sai Complex,<br />
                                        Dharavari Thota, Ongole,<br />
                                        Prakasam District,<br />
                                        Andhra Pradesh – 523001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                                <div className="bg-[#003366] p-3 rounded-sm text-white">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#003366] mb-1 uppercase tracking-wide">Phone</h3>
                                    <p className="text-gray-700 font-medium font-mono text-lg">+91-9666066663</p>
                                    <p className="text-gray-500 text-xs mt-1">(Mon-Sat, 9:00 AM - 6:00 PM)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                                <div className="bg-[#f39200] p-3 rounded-sm text-white">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#003366] mb-1 uppercase tracking-wide">Email</h3>
                                    <p className="text-gray-700 font-medium">info@shanmukhaprojects.com</p>
                                    <p className="text-gray-700 font-medium">support@shanmukhaprojects.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-sm overflow-hidden shadow-sm border border-gray-300 h-80">
                            {/* Embed Google Map for Ongole */}
                            <iframe
                                title="Ongole Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61536.8842247447!2d80.00898555820312!3d15.505723000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01620d43c3bf%3A0x673172e259e51c89!2sOngole%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
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
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-200 border-t-4 border-t-[#003366]">
                            <h2 className="text-2xl font-bold text-[#1a202c] mb-2">Send us a Message</h2>
                            <p className="text-gray-500 mb-8 border-b border-gray-100 pb-4">We will get back to you within 24 hours.</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-700">Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-colors bg-gray-50" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-700">Phone</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-colors bg-gray-50" placeholder="Contact Number" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-700">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-colors bg-gray-50" placeholder="your@email.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-700">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-colors bg-gray-50">
                                        <option>General Inquiry</option>
                                        <option>ZED Certification</option>
                                        <option>Job Application Status</option>
                                        <option>Partnership Proposal</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-700">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-colors bg-gray-50" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-[#003366] text-white font-bold py-4 rounded-sm hover:bg-[#002244] transition-colors shadow-md uppercase tracking-wide">
                                    Send Message
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
