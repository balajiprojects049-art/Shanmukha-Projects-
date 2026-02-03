import React from 'react';
import { Check, Award, TrendingUp, Users, ShieldCheck, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZEDCertification = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Page Header - ZED Theme */}
            <div className="bg-[#45b1b8] text-white py-16 md:py-20 border-b-4 border-[#a5d63f] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block bg-white text-[#45b1b8] px-4 py-1 rounded-sm text-xs font-black uppercase tracking-widest mb-6 border-l-4 border-[#a5d63f]">
                        Official Ministry of MSME Scheme
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">MSME ZED Certification</h1>
                    <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed font-medium">
                        "Zero Defect Zero Effect" — Empowering Indian MSMEs for Global Quality Standards and Sustainable Growth.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Intro Section */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-8 border-l-4 border-[#45b1b8] pl-4 uppercase tracking-tight">What is ZED?</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                            The <strong>ZED (Zero Defect Zero Effect)</strong> scheme is a flagship initiative by the Ministry of MSME, Government of India.
                            It aims to create a culture of world-class manufacturing where quality is compromised at no stage (<span className="text-[#45b1b8] font-bold">Zero Defect</span>) and operations have minimal impact on our environment (<span className="text-[#a5d63f] font-bold">Zero Effect</span>).
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                            As official facilitators, Shanmukha Projects helps your business adopt these standards, improving resource efficiency and positioning you as a leader in global supply chains.
                        </p>
                    </div>
                    <div className="rounded-sm overflow-hidden shadow-xl border-8 border-white transform hover:scale-[1.02] transition-transform">
                        <img src="/images/zed-telugu.jpg" alt="ZED Certification Regional Info" className="w-full h-auto" />
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1a202c] uppercase tracking-wide">Key Benefits for Your Business</h2>
                        <div className="w-24 h-1 bg-[#a5d63f] mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Financial Incentives", desc: "Significant subsidies on certification costs and preferred bank interest rates.", icon: <TrendingUp className="w-8 h-8" /> },
                            { title: "Global Recognition", desc: "ZED rating serves as a mark of quality and reliability for international buyers.", icon: <Globe className="w-8 h-8" /> },
                            { title: "Process Improvement", desc: "Reduce waste, save costs, and increase production efficiency.", icon: <ShieldCheck className="w-8 h-8" /> },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 border-t-8 border-t-[#45b1b8] p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="text-[#45b1b8] mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1a202c] mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Levels Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1a202c] uppercase tracking-wide">Certification Levels</h2>
                        <p className="text-gray-500 mt-2">Phased approach to quality excellence</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-sm p-10 shadow-lg border-2 border-[#cd7f32] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Award size={100} className="text-[#cd7f32]" /></div>
                            <h3 className="text-2xl font-black mb-4 text-[#754c24] uppercase tracking-wider">Bronze</h3>
                            <p className="text-gray-700 mb-8 font-medium">Entry-level focusing on hygiene, safety, and basic quality parameters.</p>
                            <div className="bg-[#754c24] text-white py-3 px-6 text-center font-black rounded-sm shadow-md">
                                80% SUBSIDY
                            </div>
                        </div>
                        <div className="bg-white rounded-sm p-10 shadow-lg border-2 border-[#a9a9a9] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><ShieldCheck size={100} className="text-[#a9a9a9]" /></div>
                            <h3 className="text-2xl font-black mb-4 text-[#5a5a5a] uppercase tracking-wider">Silver</h3>
                            <p className="text-gray-700 mb-8 font-medium">Advanced level involving rigorous process controls and environment protocols.</p>
                            <div className="bg-[#5a5a5a] text-white py-3 px-6 text-center font-black rounded-sm shadow-md">
                                60% SUBSIDY
                            </div>
                        </div>
                        <div className="bg-white rounded-sm p-10 shadow-lg border-2 border-[#ffd700] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Star size={100} className="text-[#ffd700]" /></div>
                            <h3 className="text-2xl font-black mb-4 text-[#856404] uppercase tracking-wider">Gold</h3>
                            <p className="text-gray-700 mb-8 font-medium">World-class status with matured quality & environmental management systems.</p>
                            <div className="bg-[#856404] text-white py-3 px-6 text-center font-black rounded-sm shadow-md">
                                50% SUBSIDY
                            </div>
                        </div>
                    </div>
                </div>

                {/* Women Owned Special Mention */}
                <div className="bg-[#f0fdfa] border border-teal-100 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 mb-24 border-l-8 border-l-[#45b1b8] shadow-sm">
                    <div className="bg-white p-6 rounded-full text-[#45b1b8] shadow-md">
                        <Users size={40} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#45b1b8] mb-3 uppercase tracking-tight">Support for Women Entrepreneurs</h3>
                        <p className="text-gray-800 text-lg leading-relaxed">
                            Women-owned MSMEs receive <span className="font-black text-[#b91c1c]">Additional 10% Subsidy</span> and exclusive handholding support. We are committed to fostering women leadership in the manufacturing sector across Andhra Pradesh.
                        </p>
                    </div>
                </div>

                {/* Related Initiatives Section */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-[#1a202c] uppercase tracking-wide">Related Initiatives</h2>
                        <div className="w-16 h-1 bg-[#45b1b8] mx-auto mt-4"></div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-sm shadow-lg overflow-hidden flex flex-col md:flex-row group">
                        <div className="md:w-1/3 bg-[#45b1b8] p-10 flex flex-col justify-center items-center text-center text-white">
                            <Users size={60} className="mb-4" />
                            <h3 className="text-xl font-black uppercase tracking-tighter">Sarpanch Samvaad</h3>
                        </div>
                        <div className="p-10 md:flex-1 flex flex-col justify-center">
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                Beyond manufacturing quality, we also facilitate the <strong>Sarpanch Samvaad</strong> platform—a digital community of 2.5 lakh grassroots leaders committed to village development and quality governance.
                            </p>
                            <Link to="/sarpanch-samvad" className="inline-flex items-center text-[#45b1b8] font-black uppercase tracking-widest text-sm hover:underline">
                                Learn about Sarpanch Samvaad <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-20 bg-[#1a5d62] text-white rounded-sm p-10 md:p-20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><ShieldCheck size={200} /></div>

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-widest text-[#a5d63f]">How to Get Started?</h2>
                            <p className="text-teal-50 text-xl">Follow our simple 4-step path to ZED certification</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                            {[
                                { step: "01", title: "Registration", desc: "Sign up on the MSME ZED portal using your Udyam profile." },
                                { step: "02", title: "Pledge", desc: "Commit to Zero Defect Zero Effect principles formally." },
                                { step: "03", title: "Desktop Assessment", desc: "Submit documentation for remote verification by QCI." },
                                { step: "04", title: "Certification", desc: "Receive your certificate and start availing fiscal benefits." },
                            ].map((s, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-16 h-16 bg-[#a5d63f] text-[#1a5d62] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                        {s.step}
                                    </div>
                                    <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                                    <p className="text-teal-50 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link to="/contact" className="inline-block bg-white text-[#1a5d62] font-black px-10 py-4 rounded-sm hover:bg-[#a5d63f] hover:text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-xl">
                                Book a Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZEDCertification;
