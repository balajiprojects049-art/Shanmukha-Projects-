import React, { useState } from 'react';
import { Briefcase, MapPin, IndianRupee, Clock } from 'lucide-react';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        qualification: '',
        district: '',
        position: 'ZED Facilitator'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Application submitted successfully! (Demo)');
        // Logic to send data would go here
    };

    const jobs = [
        {
            title: "ZED Facilitator",
            service: "MSME ZED Certification",
            location: "Andhra Pradesh (Field Work)",
            salary: "₹25,000 – ₹30,000 / month",
            type: "Contractual",
            desc: "Responsible for onboarding MSMEs, guiding them through documentation, and facilitating ZED certification assessments.",
            eligibility: "Degree / B-Tech / Diploma with good communication skills.",
            age: "21 – 35 Years"
        },
        {
            title: "District Coordinator",
            service: "Sarpanch Samvad App",
            location: "Andhra Pradesh (District Level)",
            salary: "₹25,000 – ₹30,000 / month",
            type: "Contractual",
            desc: "Coordinate with Sarpanchs, ensure app adoption, and manage data collection at the district level.",
            eligibility: "Any Degree. Experience in field work is a plus.",
            age: "21 – 35 Years"
        }
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen">
            <div className="bg-[#003366] text-white py-12 md:py-16 text-center border-b-4 border-orange-500">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                    Career Opportunities at Shanmukha Projects
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Job Listings */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[#1a202c] mb-6 border-l-4 border-[#138808] pl-4">Current Openings</h2>

                        <div className="mb-8 rounded-sm overflow-hidden shadow-sm border border-gray-300">
                            <img src="/images/roles-info.jpg" alt="Job Roles Info" className="w-full h-auto" />
                        </div>

                        {jobs.map((job, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border border-gray-200 hover:border-[#003366] transition-colors">
                                <div className="flex justify-between items-start mb-4 border-b border-gray-100 pb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#003366]">{job.title}</h3>
                                        <span className="text-xs font-bold uppercase text-[#138808] bg-green-50 px-2 py-1 mt-1 inline-block tracking-wide">
                                            {job.service}
                                        </span>
                                    </div>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 font-bold border border-gray-300 uppercase">
                                        {job.type}
                                    </span>
                                </div>

                                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                    {job.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 mb-6 font-medium">
                                    <div className="flex items-center gap-2"><MapPin size={16} className="text-[#f39200]" /> {job.location}</div>
                                    <div className="flex items-center gap-2"><IndianRupee size={16} className="text-[#f39200]" /> {job.salary}</div>
                                    <div className="flex items-center gap-2"><Briefcase size={16} className="text-[#003366]" /> {job.eligibility}</div>
                                    <div className="flex items-center gap-2"><Clock size={16} className="text-[#003366]" /> Age: {job.age}</div>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <button
                                        onClick={() => {
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                            // Ideally focus on form
                                        }}
                                        className="text-[#003366] font-bold text-sm hover:underline uppercase tracking-wide flex items-center gap-1"
                                    >
                                        Apply Now <span>&darr;</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Application Form & Poster */}
                    <div className="lg:order-last order-first space-y-8">
                        <div className="rounded-sm overflow-hidden shadow-sm border border-gray-300">
                            <img src="/images/recruitment-poster.jpg" alt="Recruitment Poster" className="w-full h-auto" />
                        </div>

                        <div className="bg-white p-8 rounded-sm shadow-md border border-gray-200 border-t-4 border-t-[#138808] sticky top-24">
                            <h2 className="text-2xl font-bold text-[#1a202c] mb-6">Apply Now</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Position Applied For</label>
                                    <select
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all bg-gray-50"
                                    >
                                        <option value="ZED Facilitator">ZED Facilitator</option>
                                        <option value="District Coordinator">District Coordinator</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all"
                                            placeholder="9876543210"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Highest Qualification</label>
                                    <input
                                        type="text"
                                        name="qualification"
                                        required
                                        value={formData.qualification}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all"
                                        placeholder="e.g. B.Tech / MBA"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Native District (AP)</label>
                                    <input
                                        type="text"
                                        name="district"
                                        required
                                        value={formData.district}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all"
                                        placeholder="e.g. Prakasam"
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#138808] hover:bg-green-700 text-white font-bold py-3 rounded-sm shadow-sm transition-colors uppercase tracking-wide"
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Careers;
