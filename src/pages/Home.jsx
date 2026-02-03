import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
    const { t } = useLanguage();
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { staggerChildren: 0.2 }
    };
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            {/* Announcement / Latest News Strip */}
            <div className="bg-[#3e9fa3] text-white py-2 border-b-4 border-[#a5d63f]">
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
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl bg-[#45b1b8]/90 p-6 md:p-8 rounded-sm shadow-lg border-t-4 border-[#a5d63f]"
                    >
                        <div className="inline-block px-3 py-1 bg-white text-[#003366] font-bold text-xs uppercase tracking-wider mb-4">
                            {t('hero_badge')}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                            {t('hero_title').split('ZED Certification').map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && <span className="text-[#a5d63f]">ZED Certification</span>}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className="text-lg text-gray-200 mb-8 leading-relaxed border-l-4 border-[#a5d63f] pl-4">
                            {t('hero_desc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/zed-certification" className="inline-flex items-center justify-center px-6 py-3 text-base font-extrabold text-[#1a202c] bg-[#a5d63f] hover:bg-[#94c135] transition-colors rounded-sm shadow-md">
                                {t('hero_btn_zed')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-[#45b1b8] bg-white hover:bg-gray-100 border border-white transition-colors rounded-sm">
                                {t('hero_btn_contact')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Partner Logos Strip - Simple & Clean */}
            <div className="bg-white border-b border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between items-center gap-6 opacity-80">
                        <div className="font-bold text-lg text-[#45b1b8] flex items-center gap-2"><Award className="text-[#45b1b8]" /> Quality Council of India</div>
                        <div className="font-bold text-lg text-[#45b1b8] flex items-center gap-2"><Award className="text-[#138808]" /> MSME ZED</div>
                        <div className="font-bold text-lg text-[#45b1b8] flex items-center gap-2"><Award className="text-[#a5d63f]" /> AZQDC</div>
                        <div className="font-bold text-lg text-[#45b1b8] flex items-center gap-2"><Award className="text-blue-600" /> NextGen Global</div>
                    </div>
                </div>
            </div>

            {/* Leadership Banner Section */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-sm overflow-hidden shadow-sm"
                    >
                        <img
                            src="/images/leadership-banner.png"
                            alt="Leadership Banner - Viksit Bharat & Andhra Pradesh"
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>
                </div>
            </section>

            {/* About Overview - Formal Layout */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <motion.div {...fadeIn}>
                            <h2 className="text-3xl font-bold text-[#1a202c] mb-2">
                                Official Facilitators for MSME Development
                            </h2>
                            <div className="h-1 w-20 bg-[#45b1b8] mb-6"></div>

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
                            <Link to="/about" className="text-[#45b1b8] font-extrabold hover:underline inline-flex items-center">
                                Learn more about our mission
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-200 p-2 rounded-sm"
                        >
                            <img src="/images/main-poster.jpg" alt="Shanmukha Projects Overview" className="w-full h-auto object-cover border border-gray-300" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sarpanch Samvaad Feature Section - Formal Box */}
            <section className="py-16 bg-[#f8fafc] border-y border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 md:p-10 rounded-sm shadow-md border-t-4 border-[#003366]">
                        <div className="text-center mb-8">
                            <span className="text-[#45b1b8] font-black tracking-widest uppercase text-xs">Quality Council of India Initiative</span>
                            <h2 className="text-3xl font-bold text-[#1a202c] mt-2">Sarpanch Samvaad</h2>
                            <div className="w-16 h-1 bg-[#a5d63f] mx-auto mt-3"></div>
                        </div>

                        <div className="bg-[#f0fdf4] p-6 rounded-sm border border-green-100 mb-8 text-center">
                            <h3 className="font-bold text-xl text-[#166534] mb-4">సర్పంచ్ సంవాద్ (Sarpanch Samvaad)</h3>
                            <p className="text-[#2d3748] leading-relaxed text-lg mb-2">
                                ఇది భారత నాణ్యత మండలి (QCI) ద్వారా సర్పంచులను డిజిటల్గా అనుసంధానించే, నైపుణ్యాన్ని పెంచే మరియు గ్రామాభివృద్ధిని ప్రదర్శించే ఒక వినూత్న మొబైల్ అప్లికేషన్.
                            </p>
                            <p className="text-[#2d3748] leading-relaxed text-lg">
                                2.5 లక్షల మందికి పైగా సర్పంచులను అనుసంధానిస్తూ, 'క్వాలిటీ విలేజ్'ల నిర్మాణానికి ఇది సహాయపడుతుంది.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="text-center p-4">
                                <CheckCircle className="text-[#45b1b8] h-8 w-8 mx-auto mb-2" />
                                <h4 className="font-bold text-[#2d3748]">Networking</h4>
                                <p className="text-xs text-gray-500">Connecting Sarpanchs</p>
                            </div>
                            <div className="text-center p-4 border-l border-r border-gray-100">
                                <CheckCircle className="text-[#45b1b8] h-8 w-8 mx-auto mb-2" />
                                <h4 className="font-bold text-[#2d3748]">Capacity Building</h4>
                                <p className="text-xs text-gray-500">Training & Skills</p>
                            </div>
                            <div className="text-center p-4">
                                <CheckCircle className="text-[#45b1b8] h-8 w-8 mx-auto mb-2" />
                                <h4 className="font-bold text-[#2d3748]">Development</h4>
                                <p className="text-xs text-gray-500">Village Growth</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link to="/sarpanch-samvad" className="inline-block px-8 py-3 text-sm font-black text-white bg-[#45b1b8] hover:bg-[#348a8f] rounded-sm transition-colors uppercase tracking-widest">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* App Features Mini-Grid */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { title: "Direct Connect", desc: "Network with lakhs of Sarpanchs", icon: <Users size={20} /> },
                            { title: "Zero Cost", desc: "Free for all Gram Panchayats", icon: <Award size={20} /> },
                            { title: "Training", desc: "Access govt training modules", icon: <CheckCircle size={20} /> },
                            { title: "Updates", desc: "Real-time policy notifications", icon: <CheckCircle size={20} /> }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-4 text-center border border-gray-100 shadow-sm"
                            >
                                <div className="text-[#45b1b8] flex justify-center mb-2">{item.icon}</div>
                                <h5 className="font-bold text-xs text-[#1a5d62] uppercase tracking-tighter mb-1">{item.title}</h5>
                                <p className="text-[10px] text-gray-500 leading-tight">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Event: National Quality Conclave */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-center bg-[#f0fdfa] border border-teal-100 p-6 md:p-10 rounded-sm">
                        <div className="lg:w-1/3">
                            <div className="bg-[#45b1b8] text-white p-6 rounded-sm text-center border-b-4 border-[#a5d63f]">
                                <h3 className="text-xl font-bold mb-2">LATEST EVENT</h3>
                                <p className="text-white text-xs font-black uppercase tracking-widest">Sept 2025 | New Delhi</p>
                            </div>
                            <div className="mt-4 p-4 bg-white border border-gray-200">
                                <p className="text-gray-600 text-sm italic font-medium">
                                    "Uniting and empowering grassroots leaders through shared solutions for Viksit Bharat 2047."
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#45b1b8] mb-4">
                                National Quality Conclave: Sarpanch Samvaad
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Inaugurated by Union Minister <strong>Shri C. R. Patil</strong>, the conclave brought together 75 distinguished Sarpanchs from 22 states to discuss digital empowerment and quality governance in rural India.
                            </p>
                            <div className="flex flex-wrap gap-4 items-center">
                                <span className="bg-teal-100 text-[#45b1b8] text-xs font-bold px-3 py-1 border border-teal-200 uppercase">QCI Initiative</span>
                                <span className="bg-lime-100 text-[#a5d63f] text-xs font-black px-3 py-1 border border-lime-200 uppercase">Digital Inclusion</span>
                                <Link to="/conclave-2025" className="text-[#45b1b8] font-black text-sm hover:underline flex items-center ml-auto">
                                    VIEW FULL CONCLAVE REPORT <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Organization Key Stats */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                    >
                        {[
                            { label: "District Presence", value: "26+" },
                            { label: "MSMEs Registered", value: "5000+" },
                            { label: "Quality Camps", value: "150+" },
                            { label: "Govt. Projects", value: "12+" }
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeIn} className="bg-white border border-gray-100 p-6 text-center shadow-sm">
                                <div className="text-3xl font-black text-[#45b1b8] mb-1">{stat.value}</div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Snippet - Grid Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-4">Core Services</h2>
                        <div className="h-1 w-20 bg-[#45b1b8] mx-auto mb-4"></div>
                        <p className="text-[#4a5568]">Comprehensive support for MSMEs and Government Initiatives</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
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
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow border-t-4 border-t-gray-200 hover:border-t-[#45b1b8]"
                            >
                                <div className={`mb-4 ${service.iconColor}`}>
                                    <Award className="h-10 w-10" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1a202c] mb-2">{service.title}</h3>
                                <p className="text-[#4a5568] text-sm mb-4 leading-relaxed">{service.desc}</p>
                                <Link to="/services" className="text-sm font-black text-[#45b1b8] hover:underline uppercase tracking-wide">
                                    Read More &rarr;
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA - Official Banner Style */}
            <section className="py-12 bg-[#45b1b8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Scale Your MSME?</h2>
                    <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of businesses adopting the ZED model for quality and sustainability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-3 bg-[#a5d63f] hover:bg-[#94c135] text-[#1a202c] font-black text-sm uppercase rounded-sm shadow-sm">
                            Get Started
                        </Link>
                        <Link to="/careers" className="px-8 py-3 bg-transparent border border-white text-white font-bold text-sm uppercase hover:bg-white/10 rounded-sm">
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
