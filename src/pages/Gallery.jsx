import React from 'react';

const Gallery = () => {
    const images = [
        { type: 'Campaign', title: "MSME Awareness Camp - Ongole", color: "bg-blue-100", img: "/images/main-poster.jpg" },
        { type: 'Poster', title: "ZED Certification Benefits", color: "bg-green-100", img: "/images/zed-benefits.jpg" },
        { type: 'Event', title: "Sarpanch Samvad Launch", color: "bg-orange-100", img: "/images/impact-poster.jpg" },
        { type: 'Field Work', title: "Factory Visit - ZED Assessment", color: "bg-gray-200", img: "/images/zed-steps.jpg" },
        { type: 'Meeting', title: "Meeting with QCI Officials", color: "bg-yellow-100", img: "/images/roles-info.jpg" },
        { type: 'Training', title: "ZED Facilitator Training Session", color: "bg-red-100", img: "/images/pm-quote.jpg" },
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen">
            <div className="bg-[#003366] text-white py-12 md:py-16 text-center border-b-4 border-orange-500">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Gallery & Media</h1>
                <p className="text-xl text-blue-100">
                    Glimpses of our initiatives and on-ground activities.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {images.map((img, idx) => (
                        <div key={idx} className="group cursor-pointer bg-white p-2 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                            <div className={`h-64 w-full rounded-sm ${img.color} flex items-center justify-center relative overflow-hidden bg-gray-50 border border-gray-200`}>
                                <img src={img.img} alt={img.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 uppercase font-bold tracking-wider">
                                    {img.type}
                                </div>
                            </div>
                            <h3 className="mt-3 text-sm font-bold text-[#003366] group-hover:text-[#f39200] transition-colors uppercase tracking-wide text-center">
                                {img.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-[#f0f9ff] border border-blue-200 rounded-sm p-8 md:p-12 text-center border-l-4 border-l-[#003366]">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-6">Promoting Government Initiatives</h2>
                    <p className="text-gray-800 max-w-3xl mx-auto mb-8 text-lg">
                        We actively conduct awareness camps across Andhra Pradesh to educate MSMEs about the benefits of ZED Certification and other central government schemes.
                    </p>
                    <button className="px-8 py-3 bg-[#138808] text-white font-bold rounded-sm hover:bg-green-700 transition-colors uppercase tracking-wide shadow-sm">
                        View More on Facebook / Twitter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
