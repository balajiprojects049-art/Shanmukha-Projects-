import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Bridging the gap between Government Initiatives and Grassroots Implementation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Main Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                <strong className="text-green-700">SHANMUKHA STATE & CENTRAL GOVERNMENT CONTRACT & PROJECT SERVICES</strong> (Shanmukha Projects) is a premier consultancy and facilitation organization based in Ongole, Andhra Pradesh.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                We serve as a vital link between the Micro, Small, and Medium Enterprises (MSMEs) and various State and Central Government schemes. Our primary focus is to empower local businesses through quality certification, digital adoption, and strategic growth initiatives.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-green-600">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Official Registration</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="block text-gray-500">Organization Name</span>
                                    <span className="font-semibold">SHANMUKHA PROJECTS</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">UDYAM Reg. Number</span>
                                    <span className="font-mono font-bold text-blue-800 bg-blue-50 px-2 py-1 rounded inline-block">UDYAM-AP-13-0078844</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">Headquarters</span>
                                    <span className="font-semibold">Ongole, Andhra Pradesh</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">Operating Region</span>
                                    <span className="font-semibold">Andhra Pradesh</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                            <p className="text-gray-700 mb-6">
                                To transform the MSME landscape in Andhra Pradesh by facilitating access to the ZED (Zero Defect Zero Effect) certification, promoting sustainable practices, and ensuring every eligible business can leverage government incentives for growth.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Partners & Alignment</h2>
                            <p className="text-gray-700 mb-4">
                                We work in close coordination with prestigious national bodies to execute field-level projects:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                                <li>Quality Council of India (QCI)</li>
                                <li>AZ Quality Development Company (AZQDC)</li>
                                <li>NextGen Global Services</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Visuals */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <div className="bg-white w-full rounded-lg mb-4 overflow-hidden border border-gray-100">
                                <img src="/images/org-banner.jpg" alt="Shanmukha Projects Banner" className="w-full h-auto object-cover" />
                            </div>
                            <p className="text-sm text-gray-500 italic text-center">
                                Shanmukha State & Central Government Contract & Project Services
                            </p>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg border-2 border-orange-200">
                            <img src="/images/pm-quote.jpg" alt="PM Narendra Modi Quote" className="w-full h-auto" />
                        </div>

                        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Why Choose Us?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Authorized Facilitators",
                                    "Expert Guidance on Documentation",
                                    "Local Presence across AP",
                                    "Proven Track Record"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <span className="font-medium text-gray-800">{item}</span>
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
