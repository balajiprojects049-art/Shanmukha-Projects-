import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-[#f0f0f0] border-b border-gray-300 py-2">
                <div className="max-w-7xl mx-auto px-4 flex items-center">
                    <span className="bg-[#d32f2f] text-white px-3 py-1 text-xs font-bold uppercase shrink-0 rounded-sm">Latest News</span>
                    <div className="overflow-hidden whitespace-nowrap w-full ml-4">
                        <div className="inline-block animate-marquee text-sm font-semibold text-[#003366]">
                            <span className="mx-8">📢 Applications open for ZED Certification Level 1 (Bronze)</span>
                            <span className="mx-8">📢 Special subsidy available for Women Entrepreneurs in Andhra Pradesh</span>
                            <span className="mx-8">📢 New District Coordinator positions open in Prakasam & Guntur</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="relative bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-900 opacity-90 z-0"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 z-0"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-yellow-400 font-semibold text-xs md:text-sm uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                            Empowering MSMEs in Andhra Pradesh
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Driving Growth with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ZED Certification</span> & Government Projects
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                            Shanmukha Projects is a trusted partner for MSME ZED Certification (Zero Defect Zero Effect) and government contract execution. We bridge the gap between policy and practice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/zed-certification" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-900 bg-white rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                ZED Registration
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Logos Strip */}
            <div className="bg-gray-100 border-b border-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Our Management & Partners</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Text placeholders for logos as strictly images are not available unless generated. I will use text representation styled like logos */}
                        <div className="font-bold text-xl text-gray-800 flex items-center gap-2"><Award className="text-blue-600" /> Quality Council of India (QCI)</div>
                        <div className="font-bold text-xl text-gray-800 flex items-center gap-2"><Award className="text-green-600" /> AZQDC</div>
                        <div className="font-bold text-xl text-gray-800 flex items-center gap-2"><Award className="text-orange-600" /> MSME ZED</div>
                        <div className="font-bold text-xl text-gray-800 flex items-center gap-2"><Award className="text-indigo-600" /> NextGen Global</div>
                    </div>
                </div>
            </div>

            {/* About Overview */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Official Facilitators for <span className="text-green-700">MSME Development</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Shanmukha State & Central Government Contract & Project Services is dedicated to uplifting the MSME sector in Andhra Pradesh.
                                As authorized partners, we assist businesses in achieving ZED Certification, ensuring they meet global quality standards.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Official MSME Ministry ZED Scheme Support",
                                    "Field-level Coordination across Andhra Pradesh",
                                    "Sarpanch Samvad App Implementation Partner",
                                    "Government Project Execution Specialists"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="text-green-600 h-6 w-6 shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/about" className="text-blue-700 font-bold hover:text-blue-900 inline-flex items-center group">
                                Learn more about our mission
                                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-green-100 rounded-2xl transform rotate-3 -z-10"></div>
                            <div className="bg-white rounded-xl overflow-hidden shadow-2xl flex items-center justify-center relative border border-gray-200">
                                <img src="/images/main-poster.jpg" alt="Shanmukha Projects Overview" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Snippet */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
                        <p className="text-gray-600">Comprehensive support for MSMEs and Government Initiatives</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "MSME ZED Certification",
                                desc: "Zero Defect Zero Effect certification to improve quality, reduce waste, and access government incentives.",
                                color: "bg-green-600"
                            },
                            {
                                title: "Sarpanch Samvad App",
                                desc: "Connecting village heads through the QCI-launched platform to improve local governance and networking.",
                                color: "bg-blue-600"
                            },
                            {
                                title: "Govt. Project Contracts",
                                desc: "Facilitating execution of state and central government projects with field-level coordination.",
                                color: "bg-orange-500"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border-t-4 border-transparent hover:border-green-600 group">
                                <div className={`w-14 h-14 rounded-lg ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Award className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.desc}</p>
                                <Link to="/services" className="text-sm font-bold text-blue-700 hover:underline">Read More</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-800 opacity-50 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-green-800 opacity-50 blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your MSME?</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Join thousands of businesses adopting the ZED model for quality and sustainability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition-colors">
                            Get Started Today
                        </Link>
                        <Link to="/careers" className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
