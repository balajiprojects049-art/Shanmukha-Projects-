import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-blue-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-blue-100">
                    Get in touch for ZED Certification and Government Project Support.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Office Address</h2>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-700">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        3rd Floor, Sai Complex,<br />
                                        Dharavari Thota, Ongole,<br />
                                        Prakasam District,<br />
                                        Andhra Pradesh – 523001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                    <p className="text-gray-600">+91-XXXXXXXXXX</p>
                                    <p className="text-gray-500 text-sm mt-1">(Mon-Sat, 9:00 AM - 6:00 PM)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-100 p-3 rounded-full text-yellow-700">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                    <p className="text-gray-600">info@shanmukhaprojects.com</p>
                                    <p className="text-gray-600">support@shanmukhaprojects.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-xl overflow-hidden shadow-sm border border-gray-200 h-80">
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
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                            <p className="text-gray-500 mb-8">We will get back to you within 24 hours.</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-colors" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Phone</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-colors" placeholder="Contact Number" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-colors" placeholder="your@email.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-colors">
                                        <option>General Inquiry</option>
                                        <option>ZED Certification</option>
                                        <option>Job Application Status</option>
                                        <option>Partnership Proposal</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-colors" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg">
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
