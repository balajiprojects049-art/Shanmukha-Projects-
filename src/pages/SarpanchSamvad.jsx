import React from 'react';
import { Users, Smartphone, Award, MessagesSquare, Share2, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const SarpanchSamvad = () => {
    return (
        <div className="bg-[#f8fafc] min-h-screen">
            {/* Standard Govt Header - Solid Color */}
            <div className="bg-[#003366] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#002244] opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-block bg-white text-[#003366] px-4 py-1 font-bold text-xs uppercase tracking-wider mb-6 border-l-4 border-orange-500">
                        Quality Council of India (QCI) Initiative
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Sarpanch Samvaad</h1>
                    <p className="text-xl opacity-90 max-w-3xl leading-relaxed border-l-4 border-white pl-4">
                        Connecting 2.5 Lakh Sarpanchs across India on a single digital platform to foster 'Quality Villages'.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                {/* Introduction - Formal Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-[#1a202c] mb-6 border-b-2 border-gray-200 pb-2">About the Platform</h2>
                        <div className="prose text-gray-800 space-y-6">
                            <p className="text-lg leading-relaxed">
                                <strong>Sarpanch Samvaad</strong> is an innovative mobile application launched by the Quality Council of India (QCI). It serves as a comprehensive networking and capacity-building platform for Sarpanchs (Village Heads) across the nation.
                            </p>

                            {/* Full Telugu Content Section - Official Notice Style */}
                            <div className="bg-[#eff6ff] p-8 border border-blue-200 border-l-4 border-l-[#003366] space-y-4">
                                <h3 className="font-bold text-xl text-[#003366] border-b border-blue-200 pb-2 mb-2">సర్పంచ్ సంవాద్ (Sarpanch Samvaad)</h3>
                                <p className="text-gray-900 leading-relaxed font-medium">
                                    ఇది భారత నాణ్యత మండలి (QCI) ద్వారా సర్పంచులను డిజిటల్గా అనుసంధానించే, నైపుణ్యాన్ని పెంచే మరియు గ్రామాభివృద్ధిని ప్రదర్శించే ఒక వినూత్న మొబైల్ అప్లికేషన్.
                                </p>
                                <p className="text-gray-900 leading-relaxed">
                                    2.5 లక్షల మందికి పైగా సర్పంచులను ఒకే వేదికపైకి తీసుకువచ్చి, ఉత్తమ పద్ధతులను పంచుకోవడానికి, కేంద్ర ప్రభుత్వ పథకాల సమాచారం కోసం మరియు 'క్వాలిటీ విలేజ్'ల నిర్మాణానికి ఇది సహాయపడుతుంది.
                                </p>

                                <h4 className="font-bold text-lg text-[#003366] mt-6">ముఖ్య ఉద్దేశ్యాలు & ఫీచర్లు:</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-800 ml-2">
                                    <li><strong>నెట్వర్కింగ్ మరియు సహకారం:</strong> భారతదేశం అంతటా ఉన్న సర్పంచ్లతో కనెక్ట్ అవ్వడం మరియు వారి నుండి నేర్చుకోవడం.</li>
                                    <li><strong>అభివృద్ధి ప్రదర్శన:</strong> గ్రామాల్లో చేపట్టిన పనులు, సృజనాత్మక కార్యక్రమాలను ఫోటోలు, వీడియోల ద్వారా ఇతర సర్పంచులకు చూపించడం.</li>
                                    <li><strong>పథకాల సమాచారం:</strong> ప్రభుత్వ పథకాలపై అవగాహన మరియు శిక్షణ (Capacity Building) పొందడం.</li>
                                    <li><strong>వారధి (Samvaad):</strong> సర్పంచులు, స్థానిక నాయకులు తమ గ్రామాల సమస్యలపై చర్చించి, పరిష్కారాలు కనుగొనడం.</li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-blue-200">
                                    <h4 className="font-bold text-lg text-[#003366]">ప్రాజెక్ట్ ముఖ్యాంశాలు & ప్రయోజనాలు:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-gray-800 mt-2 ml-2">
                                        <li><strong>నైపుణ్యాభివృద్ధి:</strong> సర్పంచ్లకు అవసరమైన శిక్షణ మాడ్యూల్స్ మరియు పథకాల సమాచారం.</li>
                                        <li><strong>విజయగాథలు:</strong> మంచి పద్ధతులు, సుస్థిరత (Sustainability) మరియు నీటి సంరక్షణపై అవగాహన.</li>
                                        <li><strong>అర్హత:</strong> ప్రస్తుతం పదవిలో ఉన్న గ్రామ పంచాయతీ సర్పంచ్లు మాత్రమే ఈ యాప్ను ఉపయోగించడానికి అర్హులు.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white p-2 border border-gray-300 shadow-sm">
                            <img src="/images/impact-poster.jpg" alt="Sarpanch Samvaad App" className="w-full h-auto" />
                            <div className="bg-gray-100 p-3 text-center text-sm font-bold text-gray-600 border-t border-gray-200 mt-2">
                                Empowering Grassroots Leadership
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Objectives & Features - Grid of Text Cards */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#1a202c] mb-8 border-l-4 border-[#f39200] pl-4">Key Objectives & Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Networking",
                                desc: "Connect with Sarpanchs from across India to learn and grow together.",
                                icon: <Users className="w-8 h-8 text-[#003366]" />
                            },
                            {
                                title: "Development Showcase",
                                desc: "Share photos and videos of development works and innovative initiatives.",
                                icon: <Share2 className="w-8 h-8 text-[#138808]" />
                            },
                            {
                                title: "Scheme Information",
                                desc: "Access comprehensive information on government schemes.",
                                icon: <Lightbulb className="w-8 h-8 text-[#f39200]" />
                            },
                            {
                                title: "Samvaad (Dialogue)",
                                desc: "A forum for leaders to discuss village issues and find collective solutions.",
                                icon: <MessagesSquare className="w-8 h-8 text-[#b91c1c]" />
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-6 border border-gray-200 border-t-4 border-t-gray-300 hover:border-t-[#003366] transition-colors shadow-sm">
                                <div className="mb-4 bg-gray-50 w-12 h-12 flex items-center justify-center rounded-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#1a202c] mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Regional Success Story - Govt Alert Box Style */}
                <div className="bg-white border text-gray-800 mb-16 shadow-sm overflow-hidden flex flex-col md:flex-row">
                    <div className="bg-[#138808] p-8 md:w-1/3 text-white flex flex-col justify-center items-center text-center">
                        <Award size={80} className="mb-4 text-white opacity-80" />
                        <h3 className="text-2xl font-bold border-b border-green-400 pb-4 mb-4 w-full">Pride of Andhra Pradesh</h3>
                        <div className="bg-green-700 px-4 py-1 text-sm font-bold uppercase tracking-wider">National Recognition</div>
                    </div>
                    <div className="p-8 md:w-2/3 flex flex-col justify-center bg-green-50">
                        <p className="text-lg leading-relaxed text-gray-800">
                            <strong>Vajrakarur Sarpanch (Mandla Monalisa)</strong> from Anantapur district showcased outstanding performance in the Sarpanch Samvaad app competitions at the national level, bringing recognition to the state's developmental efforts.
                        </p>
                    </div>
                </div>

                {/* Additional Info / Eligibility - Simple List */}
                <div className="bg-white p-8 border border-gray-200 shadow-sm mb-12">
                    <h2 className="text-2xl font-bold text-[#1a202c] mb-6">Participation Details</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                        <li className="flex flex-col gap-2 border-l-2 border-blue-500 pl-4">
                            <span className="flex items-center gap-2 font-bold text-[#003366] uppercase"><Smartphone size={16} /> Availability</span>
                            <span className="text-gray-600">Available on <strong>Google Play Store</strong> and <strong>Apple App Store</strong>.</span>
                        </li>
                        <li className="flex flex-col gap-2 border-l-2 border-blue-500 pl-4">
                            <span className="flex items-center gap-2 font-bold text-[#003366] uppercase"><Users size={16} /> Eligibility</span>
                            <span className="text-gray-600">Only currently serving <strong>Gram Panchayat Sarpanchs</strong> can register.</span>
                        </li>
                        <li className="flex flex-col gap-2 border-l-2 border-blue-500 pl-4">
                            <span className="flex items-center gap-2 font-bold text-[#003366] uppercase"><Lightbulb size={16} /> Motto</span>
                            <span className="text-gray-600 text-base italic font-serif text-[#b91c1c]">"Samvaad se Samadhan"</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-8 text-center border-t border-gray-200 pt-8">
                    <Link to="/contact" className="inline-block px-8 py-3 bg-[#003366] text-white font-bold uppercase tracking-wide hover:bg-[#002244] rounded-sm transition-colors">
                        Contact Support Team
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SarpanchSamvad;
