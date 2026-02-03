import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const translations = {
        en: {
            // Navbar
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            zed: 'ZED Certification',
            sarpanch: 'Sarpanch Samvaad',
            conclave: 'National Quality Conclave',
            careers: 'Careers',
            gallery: 'Gallery',
            contact: 'Contact Us',

            // Hero
            hero_badge: 'Empowering MSMEs in Andhra Pradesh',
            hero_title: 'Driving Growth with ZED Certification & Government Projects',
            hero_desc: 'Shanmukha Projects is a trusted partner for MSME ZED Certification (Zero Defect Zero Effect) and government contract execution. We bridge the gap between policy and practice.',
            hero_btn_zed: 'ZED Registration',
            hero_btn_contact: 'Contact Us',
        },
        te: {
            // Navbar
            home: 'హోమ్',
            about: 'మా గురించి',
            services: 'సేవలు',
            zed: 'ZED ధృవీకరణ',
            sarpanch: 'సర్పంచ్ సంవాద్',
            conclave: 'నేషనల్ క్వాలిటీ కాన్క్లేవ్',
            careers: 'కెరీర్',
            gallery: 'గ్యాలరీ',
            contact: 'మమ్మల్ని సంప్రదించండి',

            // Hero
            hero_badge: 'ఆంధ్రప్రదేశ్‌లోని MSMEలను సాధికారపరచడం',
            hero_title: 'ZED సర్టిఫికేషన్ & ప్రభుత్వ ప్రాజెక్టులతో వృద్ధిని పెంచడం',
            hero_desc: 'షణ్ముఖ ప్రాజెక్ట్స్ MSME ZED సర్టిఫికేషన్ (జీరో డిఫెక్ట్ జీరో ఎఫెక్ట్) మరియు ప్రభుత్వ కాంట్రాక్ట్ అమలు కోసం ఒక నమ్మకమైన భాగస్వామి. మేము విధానానికి మరియు ఆచరణకు మధ్య అంతరాన్ని తగ్గిస్తాము.',
            hero_btn_zed: 'ZED నమోదు',
            hero_btn_contact: 'మమ్మల్ని సంప్రదించండి',
        }
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
