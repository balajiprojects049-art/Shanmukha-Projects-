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
        <div className="bg-white min-h-screen">
            <div className="bg-gray-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Gallery & Media</h1>
                <p className="text-xl text-gray-400">
                    Glimpses of our initiatives and on-ground activities.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {images.map((img, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className={`h-64 w-full rounded-xl shadow-sm ${img.color} flex items-center justify-center relative overflow-hidden bg-white border border-gray-100`}>
                                <img src={img.img} alt={img.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                                {img.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-green-50 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Promoting Government Initiatives</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-8">
                        We actively conduct awareness camps across Andhra Pradesh to educate MSMEs about the benefits of ZED Certification and other central government schemes.
                    </p>
                    <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
                        View More on Facebook / Twitter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
