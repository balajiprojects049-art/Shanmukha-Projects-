import React from 'react';
import { Check, Star, Award, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZEDCertification = () => {
    return (
        <div className="bg-[#f8fafc] min-h-screen">
            {/* Hero */}
            <div className="bg-[#003366] text-white py-12 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#002244] opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-block bg-white text-[#003366] px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-wider mb-6 border-l-4 border-orange-500">
                        Official Ministry of MSME Scheme
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">MSME ZED Certification</h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl leading-relaxed border-l-4 border-white pl-4">
                        Zero Defect Zero Effect — A roadmap to Global Competitiveness for Indian MSMEs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Intro */}
                <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-[#1a202c] mb-6 border-b border-gray-200 pb-2">What is ZED?</h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6 text-justify">
                            The <strong>ZED (Zero Defect Zero Effect)</strong> scheme is an initiative by the Ministry of MSME, Government of India.
                            It aims to encourage MSMEs to manufacture quality products (<span className="text-[#138808] font-bold">Zero Defect</span>) with minimal environmental impact (<span className="text-[#138808] font-bold">Zero Effect</span>).
                        </p>
                    </div>
                    <div className="rounded-sm overflow-hidden shadow-sm border border-gray-300 p-1 bg-white">
                        <img src="/images/zed-telugu.jpg" alt="ZED Certification Regional Info" className="w-full h-auto" />
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#1a202c] mb-8 text-center uppercase tracking-wide">Benefits of Certification</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Financial Incentives", desc: "Subsidies on certification costs and concessional interest rates from banks.", icon: <TrendingUp /> },
                            { title: "Market Recognition", desc: "Enhanced credibility in domestic and international markets.", icon: <Award /> },
                            { title: "Technology Upgradation", desc: "Support for adopting cleaner and more efficient technologies.", icon: <Check /> },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 border-t-4 border-t-[#003366] p-6 rounded-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#f0f9ff] rounded-sm flex items-center justify-center text-[#003366] mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#1a202c] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Diagram */}
                <div className="mb-16 flex justify-center">
                    <div className="max-w-4xl w-full bg-white p-2 rounded-sm shadow-sm border border-gray-300">
                        <img src="/images/zed-benefits.jpg" alt="ZED Benefits Diagram" className="w-full h-auto" />
                    </div>
                </div>

                {/* Levels */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#1a202c] mb-10 text-center uppercase tracking-wide">Certification Levels</h2>

                    <div className="mb-10 flex justify-center">
                        <div className="max-w-2xl bg-white rounded-sm shadow-md overflow-hidden p-2 border border-gray-300">
                            <img src="/images/zed-levels-poster.jpg" alt="ZED Certification Levels" className="w-full h-auto" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#754c24] text-white rounded-sm p-8 shadow-md relative overflow-hidden border-t-4 border-[#cd7f32]">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><Award size={80} /></div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Bronze</h3>
                            <p className="opacity-90 text-sm leading-relaxed">Entry-level certification focusing on basic hygiene, safety, and quality parameters.</p>
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <span className="text-lg font-bold">Subsidy: 80%</span>
                            </div>
                        </div>
                        <div className="bg-[#5a5a5a] text-white rounded-sm p-8 shadow-md relative overflow-hidden border-t-4 border-[#a9a9a9]">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><Award size={80} /></div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Silver</h3>
                            <p className="opacity-90 text-sm leading-relaxed">Mid-level certification requiring improved process control and environmental compliance.</p>
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <span className="text-lg font-bold">Subsidy: 60%</span>
                            </div>
                        </div>
                        <div className="bg-[#856404] text-white rounded-sm p-8 shadow-md relative overflow-hidden border-t-4 border-[#ffd700]">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><Award size={80} /></div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Gold</h3>
                            <p className="opacity-90 text-sm leading-relaxed">Top-tier certification for MSMEs with world-class quality and sustainability systems.</p>
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <span className="text-lg font-bold">Subsidy: 50%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Women Owned Special Mention */}
                <div className="bg-[#fff0f6] border border-pink-200 rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 mb-16 border-l-4 border-l-pink-600">
                    <div className="bg-white p-4 rounded-full text-pink-600 shadow-sm border border-pink-100">
                        <Users size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#003366] mb-2 uppercase tracking-wide">Special Benefit for Women Entrepreneurs</h3>
                        <p className="text-gray-800 text-lg">
                            Women-owned MSMEs are eligible for <span className="font-bold text-[#b91c1c]">additional subsidies and special handholding support</span> throughout the ZED certification process. We prioritize empowering women-led enterprises in Andhra Pradesh.
                        </p>
                    </div>
                </div>

                {/* Process Steps */}
                <div className="bg-[#00284d] text-white rounded-sm p-8 md:p-16 relative overflow-hidden">
                    {/* Background pattern equivalent */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest text-[#f39200]">How to Get Certified?</h2>
                            <p className="text-gray-300">Shanmukha Projects guides you through every step.</p>
                        </div>

                        <div className="mb-12 flex justify-center">
                            <div className="bg-white p-1 rounded-sm">
                                <img src="/images/zed-steps.jpg" alt="ZED Certification Steps" className="max-w-full h-auto border border-gray-200" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { step: 1, title: "Registration", desc: "Register on the ZED portal with your Udyam Registration." },
                                { step: 2, title: "Pledge", desc: "Take the ZED Pledge to uphold quality and sustainability values." },
                                { step: 3, title: "Assessment", desc: "Undergo a desktop or onsite assessment based on the level applied for." },
                                { step: 4, title: "Certification", desc: "Receive your ZED Certificate and avail government benefits." },
                            ].map((s) => (
                                <div key={s.step} className="flex gap-4 bg-[#001f3f] p-4 rounded-sm border border-[#004080]">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#138808] flex items-center justify-center font-bold text-lg text-white">
                                        {s.step}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1 text-white">{s.title}</h4>
                                        <p className="text-gray-400 text-sm">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Link to="/contact" className="inline-block bg-[#f39200] text-black font-bold px-8 py-3 rounded-sm hover:bg-[#d98200] transition-colors uppercase tracking-wider text-sm shadow-lg">
                                Start Your Registration
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ZEDCertification;
