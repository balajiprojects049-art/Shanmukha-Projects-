import React from 'react';

const About = () => {
    return (
        <div className="bg-[#f8fafc] min-h-screen">
            {/* Header */}
            <div className="bg-[#003366] text-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-l-4 border-orange-500 pl-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">About Us</h1>
                        <p className="text-lg text-blue-100 max-w-2xl">
                            Bridging the gap between Government Initiatives and Grassroots Implementation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Main Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[#1a202c] mb-6 border-b border-gray-200 pb-2">Who We Are</h2>
                            <p className="text-gray-800 text-lg leading-relaxed mb-4 text-justify">
                                <strong className="text-[#003366]">SHANMUKHA STATE & CENTRAL GOVERNMENT CONTRACT & PROJECT SERVICES</strong> (Shanmukha Projects) is a premier consultancy and facilitation organization based in Ongole, Andhra Pradesh.
                            </p>
                            <p className="text-gray-800 text-lg leading-relaxed text-justify">
                                We serve as a vital link between the Micro, Small, and Medium Enterprises (MSMEs) and various State and Central Government schemes. Our primary focus is to empower local businesses through quality certification, digital adoption, and strategic growth initiatives.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-300 border-l-4 border-l-[#138808]">
                            <h3 className="text-lg font-bold text-[#003366] mb-4 uppercase tracking-wide">Official Registration</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase font-bold">Organization Name</span>
                                    <span className="font-bold text-[#1a202c]">SHANMUKHA PROJECTS</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase font-bold">UDYAM Reg. Number</span>
                                    <span className="font-mono font-bold text-[#003366] bg-blue-50 px-2 py-1 rounded-sm border border-blue-100 inline-block">UDYAM-AP-13-0078844</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase font-bold">Headquarters</span>
                                    <span className="font-bold text-[#1a202c]">Ongole, Andhra Pradesh</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase font-bold">Operating Region</span>
                                    <span className="font-bold text-[#1a202c]">Andhra Pradesh</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#1a202c] mb-4 border-b border-gray-200 pb-2">Our Mission</h2>
                            <p className="text-gray-800 mb-6 leading-relaxed">
                                To transform the MSME landscape in Andhra Pradesh by facilitating access to the ZED (Zero Defect Zero Effect) certification, promoting sustainable practices, and ensuring every eligible business can leverage government incentives for growth.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#1a202c] mb-4 border-b border-gray-200 pb-2">Our Partners & Alignment</h2>
                            <p className="text-gray-800 mb-4">
                                We work in close coordination with prestigious national bodies to execute field-level projects:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-800 ml-2">
                                <li>Quality Council of India (QCI)</li>
                                <li>AZ Quality Development Company (AZQDC)</li>
                                <li>NextGen Global Services</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Visuals */}
                    <div className="space-y-8">
                        <div className="bg-white p-2 rounded-sm shadow-sm border border-gray-300">
                            <img src="/images/org-banner.jpg" alt="Shanmukha Projects Banner" className="w-full h-auto object-cover border border-gray-100" />
                            <p className="text-xs text-gray-500 italic text-center mt-2 p-2 bg-gray-50">
                                Shanmukha State & Central Government Contract & Project Services
                            </p>
                        </div>

                        <div className="rounded-sm overflow-hidden shadow-sm border-2 border-[#f39200]">
                            <img src="/images/pm-quote.jpg" alt="PM Narendra Modi Quote" className="w-full h-auto" />
                        </div>

                        <div className="bg-[#f0f9ff] p-6 rounded-sm border border-blue-200">
                            <h3 className="text-lg font-bold text-[#003366] mb-4 border-b border-blue-200 pb-2">Why Choose Us?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Authorized Facilitators",
                                    "Expert Guidance on Documentation",
                                    "Local Presence across AP",
                                    "Proven Track Record"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                                            {i + 1}
                                        </div>
                                        <span className="font-medium text-gray-800 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
