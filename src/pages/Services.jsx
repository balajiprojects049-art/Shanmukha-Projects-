import React from 'react';
import { ShieldCheck, Users, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            id: "zed-certification",
            title: "MSME ZED Certification",
            icon: <ShieldCheck className="h-10 w-10 text-green-600" />,
            description: "Comprehensive support for MSMEs to achieve 'Zero Defect Zero Effect' certification from the Ministry of MSME.",
            details: [
                "Awareness & Onboarding of MSMEs",
                "Documentation Support & Handholding",
                "Pre-assessment Guidance (Desktop & Onsite)",
                "Assistance with Subsidy & Incentive Claims"
            ],
            link: "/zed-certification"
        },
        {
            id: "sarpanch-samvad",
            title: "Sarpanch Samvad Mobile App",
            icon: <Users className="h-10 w-10 text-blue-600" />,
            description: "An initiative by the Quality Council of India (QCI) to connect Sarpanchs across India for better governance.",
            details: [
                "Onboarding Sarpanchs to the platform",
                "Data collection and verification",
                "Facilitating network building among village heads",
                "Coordinating developmental discussions"
            ],
            link: "/sarpanch-samvad"
        },
        {
            id: "govt-contracts",
            title: "State & Central Govt. Projects",
            icon: <Briefcase className="h-10 w-10 text-orange-600" />,
            description: "Execution and management support for various government contracts and developmental projects.",
            details: [
                "MSME Digital Empowerment Initiatives",
                "Field-level Project Implementation",
                "Surveys and Data Collection",
                "Public Sector Coordination"
            ],
            link: "#"
        }
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen pb-16">
            <div className="bg-[#003366] text-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-l-4 border-orange-500 pl-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Schems & Services</h1>
                        <p className="text-lg text-blue-100 max-w-2xl">
                            Professional facilitation and consultancy services for Government Schemes in Andhra Pradesh.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="md:flex">
                                <div className="md:w-64 bg-gray-50 flex flex-col items-center justify-center p-8 border-r border-gray-200">
                                    <div className="bg-white p-4 rounded-full border border-gray-200 mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-center text-[#003366]">{service.title}</h3>
                                </div>
                                <div className="p-8 md:flex-1">
                                    <p className="text-gray-700 text-lg mb-6 leading-relaxed bg-[#f0f9ff] p-4 border-l-4 border-[#003366]">
                                        {service.description}
                                    </p>

                                    <h4 className="font-bold text-[#1a202c] mb-4 flex items-center gap-2 uppercase text-sm tracking-wide">
                                        <FileText size={16} className="text-[#f39200]" /> Key Objectives:
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#138808] mt-2 shrink-0"></span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex gap-4">
                                        {service.link !== "#" ? (
                                            <Link to={service.link} className="inline-block bg-[#003366] text-white px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-[#002244] border-b-2 border-[#f39200] transition-colors rounded-sm">
                                                View Details
                                            </Link>
                                        ) : (
                                            <Link to="/contact" className="inline-block bg-white text-[#003366] border border-[#003366] px-6 py-2 text-sm font-bold uppercase tracking-wide hover:bg-blue-50 transition-colors rounded-sm">
                                                Enquire Now
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
