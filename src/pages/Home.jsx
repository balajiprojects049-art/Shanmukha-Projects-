
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            {/* Announcement / Latest News Strip */}
            <div className="bg-[#00284d] text-white py-2 border-b-4 border-orange-500">
                <div className="max-w-7xl mx-auto px-4 flex items-center">
                    <div className="bg-[#b91c1c] text-white px-4 py-1 text-xs font-bold uppercase shrink-0 rounded-sm flex items-center gap-2">
                        <span>New</span> <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span>
                    </div>
                    <div className="overflow-hidden whitespace-nowrap w-full ml-4 font-bold text-sm">
                        <div className="inline-block animate-marquee uppercase tracking-wide">
                            <span className="mx-8">🌟 Sarpanch Samvaad National Quality Conclave held at New Delhi </span>
                            <span className="mx-8 text-yellow-300">📢 60,000+ Sarpanchs onboarded on Sarpanch Samvaad App</span>
                            <span className="mx-8">📢 Applications open for ZED Certification Level 1 (Bronze)</span>
                            <span className="mx-8 text-yellow-300">📢 Special subsidy available for Women Entrepreneurs in AP</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="relative bg-[#003366] text-white overflow-hidden">
                {/* Standard Govt overlay - no loud gradients */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center z-0"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="max-w-4xl bg-[#003366]/90 p-6 md:p-8 rounded-sm shadow-lg border-t-4 border-[#ff9933]">
                        <div className="inline-block px-3 py-1 bg-white text-[#003366] font-bold text-xs uppercase tracking-wider mb-4">
                            Empowering MSMEs in Andhra Pradesh
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                            Driving Growth with <span className="text-[#ff9933]">ZED Certification</span> & Government Projects
                        </h1>
                        <p className="text-lg text-gray-200 mb-8 leading-relaxed border-l-4 border-[#ff9933] pl-4">
                            Shanmukha Projects is a trusted partner for MSME ZED Certification (Zero Defect Zero Effect) and government contract execution. We bridge the gap between policy and practice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/zed-certification" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-[#138808] hover:bg-green-700 transition-colors rounded-sm shadow-md">
                                ZED Registration
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-[#003366] bg-white hover:bg-gray-100 border border-white transition-colors rounded-sm">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Logos Strip - Simple & Clean */}
            <div className="bg-white border-b border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between items-center gap-6 opacity-80">
                        <div className="font-bold text-lg text-[#003366] flex items-center gap-2"><Award className="text-[#003366]" /> Quality Council of India</div>
                        <div className="font-bold text-lg text-[#003366] flex items-center gap-2"><Award className="text-[#138808]" /> MSME ZED</div>
                        <div className="font-bold text-lg text-[#003366] flex items-center gap-2"><Award className="text-[#ff9933]" /> AZQDC</div>
                        <div className="font-bold text-lg text-[#003366] flex items-center gap-2"><Award className="text-blue-600" /> NextGen Global</div>
                    </div>
                </div>
            </div>

            {/* About Overview - Formal Layout */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a202c] mb-2">
                                Official Facilitators for MSME Development
                            </h2>
                            <div className="h-1 w-20 bg-[#ff9933] mb-6"></div>

                            <p className="text-[#4a5568] text-base mb-6 leading-relaxed text-justify">
                                Shanmukha State & Central Government Contract & Project Services is dedicated to uplifting the MSME sector in Andhra Pradesh.
                                As authorized partners, we assist businesses in achieving ZED Certification, ensuring they meet global quality standards.
                            </p>
                            <ul className="space-y-3 mb-8 bg-gray-50 p-6 rounded-sm border border-gray-200">
                                {[
                                    "Official MSME Ministry ZED Scheme Support",
                                    "Field-level Coordination across Andhra Pradesh",
                                    "Sarpanch Samvad App Implementation Partner",
                                    "Government Project Execution Specialists"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                                        <CheckCircle className="text-[#138808] h-5 w-5 shrink-0 mt-0.5" />
                                        <span className="text-[#2d3748] font-medium text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/about" className="text-[#003366] font-bold hover:underline inline-flex items-center">
                                Learn more about our mission
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="bg-gray-200 p-2 rounded-sm">
                            <img src="/images/main-poster.jpg" alt="Shanmukha Projects Overview" className="w-full h-auto object-cover border border-gray-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sarpanch Samvaad Feature Section - Formal Box */}
            <section className="py-16 bg-[#f8fafc] border-y border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 md:p-10 rounded-sm shadow-md border-t-4 border-[#003366]">
                        <div className="text-center mb-8">
                            <span className="text-[#003366] font-bold tracking-widest uppercase text-xs">Quality Council of India Initiative</span>
                            <h2 className="text-3xl font-bold text-[#1a202c] mt-2">Sarpanch Samvaad</h2>
                            <div className="w-16 h-1 bg-[#138808] mx-auto mt-3"></div>
                        </div>

                        <div className="bg-[#eff6ff] p-6 rounded-sm border border-blue-100 mb-8 text-center">
                            <h3 className="font-bold text-xl text-[#1e3a8a] mb-4">సర్పంచ్ సంవాద్ (Sarpanch Samvaad)</h3>
                            <p className="text-[#2d3748] leading-relaxed text-lg mb-2">
                                ఇది భారత నాణ్యత మండలి (QCI) ద్వారా సర్పంచులను డిజిటల్గా అనుసంధానించే, నైపుణ్యాన్ని పెంచే మరియు గ్రామాభివృద్ధిని ప్రదర్శించే ఒక వినూత్న మొబైల్ అప్లికేషన్.
                            </p>
                            <p className="text-[#2d3748] leading-relaxed text-lg">
                                2.5 లక్షల మందికి పైగా సర్పంచులను అనుసంధానిస్తూ, 'క్వాలిటీ విలేజ్'ల నిర్మాణానికి ఇది సహాయపడుతుంది.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="text-center p-4">
                                <CheckCircle className="text-[#138808] h-8 w-8 mx-auto mb-2" />
                                <h4 className="font-bold text-[#2d3748]">Networking</h4>
                                <p className="text-xs text-gray-500">Connecting Sarpanchs</p>
                            </div>
                            <div className="text-center p-4 border-l border-r border-gray-100">
                                <CheckCircle className="text-[#138808] h-8 w-8 mx-auto mb-2" />
                                <h4 className="font-bold text-[#2d3748]">Capacity Building</h4>
                                <p className="text-xs text-gray-500">Training & Skills</p>
                            </div>
                            <div className="text-center p-4">
                                <CheckCircle className="text-[#138808] h-8 w-8 mx-auto mb-2" />
                                <h4 className="font-bold text-[#2d3748]">Development</h4>
                                <p className="text-xs text-gray-500">Village Growth</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link to="/sarpanch-samvad" className="inline-block px-8 py-3 text-sm font-bold text-white bg-[#003366] hover:bg-[#002244] rounded-sm transition-colors uppercase tracking-widest">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Event: National Quality Conclave */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-center bg-[#f0f9ff] border border-blue-100 p-6 md:p-10 rounded-sm">
                        <div className="lg:w-1/3">
                            <div className="bg-[#003366] text-white p-6 rounded-sm text-center border-b-4 border-orange-500">
                                <h3 className="text-xl font-bold mb-2">LATEST EVENT</h3>
                                <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Sept 2025 | New Delhi</p>
                            </div>
                            <div className="mt-4 p-4 bg-white border border-gray-200">
                                <p className="text-gray-600 text-sm italic font-medium">
                                    "Uniting and empowering grassroots leaders through shared solutions for Viksit Bharat 2047."
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">
                                National Quality Conclave: Sarpanch Samvaad
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Inaugurated by Union Minister <strong>Shri C. R. Patil</strong>, the conclave brought together 75 distinguished Sarpanchs from 22 states to discuss digital empowerment and quality governance in rural India.
                            </p>
                            <div className="flex flex-wrap gap-4 items-center">
                                <span className="bg-green-100 text-[#138808] text-xs font-bold px-3 py-1 border border-green-200 uppercase">QCI Initiative</span>
                                <span className="bg-orange-100 text-[#f39200] text-xs font-bold px-3 py-1 border border-orange-200 uppercase">Digital Inclusion</span>
                                <Link to="/conclave-2025" className="text-[#003366] font-bold text-sm hover:underline flex items-center ml-auto">
                                    VIEW FULL CONCLAVE REPORT <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Snippet - Grid Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-4">Core Services</h2>
                        <div className="h-1 w-20 bg-[#ff9933] mx-auto mb-4"></div>
                        <p className="text-[#4a5568]">Comprehensive support for MSMEs and Government Initiatives</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "MSME ZED Certification",
                                desc: "Zero Defect Zero Effect certification to improve quality, reduce waste, and access government incentives.",
                                iconColor: "text-[#138808]"
                            },
                            {
                                title: "Sarpanch Samvaad App",
                                desc: "Connecting village heads through the QCI-launched platform to improve local governance and networking.",
                                iconColor: "text-[#003366]"
                            },
                            {
                                title: "Govt. Project Contracts",
                                desc: "Facilitating execution of state and central government projects with field-level coordination.",
                                iconColor: "text-[#c2410c]"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow border-t-4 border-t-gray-200 hover:border-t-[#003366]">
                                <div className={`mb - 4 ${service.iconColor} `}>
                                    <Award className="h-10 w-10" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1a202c] mb-2">{service.title}</h3>
                                <p className="text-[#4a5568] text-sm mb-4 leading-relaxed">{service.desc}</p>
                                <Link to="/services" className="text-sm font-bold text-[#003366] hover:underline uppercase tracking-wide">
                                    Read More &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Official Banner Style */}
            <section className="py-12 bg-[#003366]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Scale Your MSME?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of businesses adopting the ZED model for quality and sustainability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-3 bg-[#ff9933] hover:bg-[#e68a00] text-black font-bold text-sm uppercase rounded-sm shadow-sm">
                            Get Started
                        </Link>
                        <Link to="/careers" className="px-8 py-3 bg-transparent border border-gray-400 text-white font-bold text-sm uppercase hover:bg-white/10 rounded-sm">
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
