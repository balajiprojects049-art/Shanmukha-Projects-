import React from 'react';
import { Check, Star, Award, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZEDCertification = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Official Ministry of MSME Scheme
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">MSME ZED Certification</h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
                        Zero Defect Zero Effect — A roadmap to Global Competitiveness for Indian MSMEs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is ZED?</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            The <strong>ZED (Zero Defect Zero Effect)</strong> scheme is an initiative by the Ministry of MSME, Government of India.
                            It aims to encourage MSMEs to manufacture quality products (<span className="text-green-700 font-semibold">Zero Defect</span>) with minimal environmental impact (<span className="text-green-700 font-semibold">Zero Effect</span>).
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                        <img src="/images/zed-telugu.jpg" alt="ZED Certification Regional Info" className="w-full h-auto" />
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Certification</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Financial Incentives", desc: "Subsidies on certification costs and concessional interest rates from banks.", icon: <TrendingUp /> },
                            { title: "Market Recognition", desc: "Enhanced credibility in domestic and international markets.", icon: <Award /> },
                            { title: "Technology Upgradation", desc: "Support for adopting cleaner and more efficient technologies.", icon: <Check /> },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-orange-500 mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Diagram */}
                <div className="mb-20 flex justify-center">
                    <div className="max-w-4xl w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <img src="/images/zed-benefits.jpg" alt="ZED Benefits Diagram" className="w-full h-auto rounded-lg" />
                    </div>
                </div>

                {/* Levels */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Certification Levels</h2>

                    <div className="mb-10 flex justify-center">
                        <div className="max-w-2xl bg-white rounded-xl shadow-md overflow-hidden p-2 border border-gray-100">
                            <img src="/images/zed-levels-poster.jpg" alt="ZED Certification Levels" className="w-full h-auto rounded-lg" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-yellow-700 text-white rounded-xl p-8 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><Award size={100} /></div>
                            <h3 className="text-2xl font-bold mb-4">Bronze</h3>
                            <p className="opacity-90">Entry-level certification focusing on basic hygiene, safety, and quality parameters.</p>
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <span className="text-sm font-semibold">Subsidy: 80%</span>
                            </div>
                        </div>
                        <div className="bg-gray-400 text-white rounded-xl p-8 shadow-lg relative overflow-hidden transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><Award size={100} /></div>
                            <h3 className="text-2xl font-bold mb-4">Silver</h3>
                            <p className="opacity-90">Mid-level certification requiring improved process control and environmental compliance.</p>
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <span className="text-sm font-semibold">Subsidy: 60%</span>
                            </div>
                        </div>
                        <div className="bg-yellow-500 text-white rounded-xl p-8 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><Award size={100} /></div>
                            <h3 className="text-2xl font-bold mb-4">Gold</h3>
                            <p className="opacity-90">Top-tier certification for MSMEs with world-class quality and sustainability systems.</p>
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <span className="text-sm font-semibold">Subsidy: 50%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Women Owned Special Mention */}
                <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mb-20">
                    <div className="bg-pink-100 p-6 rounded-full text-pink-600">
                        <Users size={40} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Special Benefit for Women Entrepreneurs</h3>
                        <p className="text-gray-700 text-lg">
                            Women-owned MSMEs are eligible for <span className="font-bold text-pink-700">additional subsidies and special handholding support</span> throughout the ZED certification process. We prioritize empowering women-led enterprises in Andhra Pradesh.
                        </p>
                    </div>
                </div>

                {/* Process Steps */}
                <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">How to Get Certified?</h2>
                        <p className="text-gray-400">Shanmukha Projects guides you through every step.</p>
                    </div>

                    <div className="mb-12 flex justify-center">
                        <img src="/images/zed-steps.jpg" alt="ZED Certification Steps" className="max-w-full h-auto rounded-lg shadow-lg border-4 border-white/10" />
                    </div>

                    <div className="space-y-8">
                        {[
                            { step: 1, title: "Registration", desc: "Register on the ZED portal with your Udyam Registration." },
                            { step: 2, title: "Pledge", desc: "Take the ZED Pledge to uphold quality and sustainability values." },
                            { step: 3, title: "Assessment", desc: "Undergo a desktop or onsite assessment based on the level applied for." },
                            { step: 4, title: "Certification", desc: "Receive your ZED Certificate and avail government benefits." },
                        ].map((s) => (
                            <div key={s.step} className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center font-bold text-xl">
                                    {s.step}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                                    <p className="text-gray-400">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/contact" className="inline-block bg-white text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                            Start Your Registration
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ZEDCertification;
