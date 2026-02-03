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
            link: "#" // No specific internal page requested, but can link to contact
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
        <div className="bg-gray-50 min-h-screen pb-16">
            <div className="bg-green-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-green-100 max-w-2xl">
                        Professional facilitation and consultancy services for Government Schemes in Andhra Pradesh.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 gap-12">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="md:flex">
                                <div className="md:w-64 bg-gray-50 flex flex-col items-center justify-center p-8 border-r border-gray-100">
                                    <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-center text-gray-800">{service.title}</h3>
                                </div>
                                <div className="p-8 md:flex-1">
                                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>

                                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <FileText size={18} className="text-gray-400" /> KeyDeliverables:
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>

                                    {service.link !== "#" ? (
                                        <Link to={service.link} className="inline-block bg-blue-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                                            Learn More
                                        </Link>
                                    ) : (
                                        <Link to="/contact" className="inline-block border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                            Enquire Now
                                        </Link>
                                    )}
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
