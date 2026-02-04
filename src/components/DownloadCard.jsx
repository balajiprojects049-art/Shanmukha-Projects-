import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const DownloadCard = ({
    pdfPath = '/images/AZQDC ZED AWARENESS PROGRAMME Updated.pdf',
    title = 'Download Our Brochure',
    description = 'Get detailed information about our services and programs.',
    fileName = 'AZQDC-ZED-Awareness-Programme.pdf'
}) => {
    const handleDownload = () => {
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl mx-auto mt-16 mb-12 px-4"
        >
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl shadow-lg border border-teal-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Left side - Icon and Text */}
                        <div className="flex items-start gap-4 flex-1">
                            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-4 rounded-xl shadow-md">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* Right side - Download Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                y: [0, -5, -15, -5, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 0.5
                            }}
                            onClick={handleDownload}
                            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
                        >
                            <Download className="w-5 h-5" />
                            Download PDF
                        </motion.button>
                    </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600"></div>
            </div>
        </motion.div>
    );
};

export default DownloadCard;
