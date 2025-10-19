const translations = {
    en: {
        siteTitle: "AutoDrive Market",
        brand: "AutoDrive Market",
        heroTitle: "Find your dream car in minutes.",
        heroSubtitle: "Browse our curated collection of new and pre-owned vehicles ready for immediate delivery.",
        browseInventory: "Browse inventory",
        inventoryTitle: "Featured vehicles",
        sedanName: "CityLine Sedan 2023",
        sedanPrice: "$28,500",
        sedanFeature1: "1.5L turbo engine",
        sedanFeature2: "Adaptive cruise control",
        sedanFeature3: "Panoramic roof",
        suvName: "TrailMaster SUV 4x4",
        suvPrice: "$44,900",
        suvFeature1: "3.0L V6 power",
        suvFeature2: "360° camera system",
        suvFeature3: "Leather interior",
        evName: "VoltX Electric Hatch",
        evPrice: "$35,200",
        evFeature1: "400 km range",
        evFeature2: "Fast charging 30 min",
        evFeature3: "Advanced driver assist",
        bookTestDrive: "Book a test drive",
        servicesTitle: "Services tailored to you",
        financingTitle: "Flexible financing",
        financingText: "Choose from a range of bank and in-house financing plans with instant approval.",
        warrantyTitle: "Certified warranty",
        warrantyText: "Every vehicle includes a 2-year warranty and free roadside assistance.",
        deliveryTitle: "Nationwide delivery",
        deliveryText: "We deliver to all major cities within 72 hours of completing your purchase.",
        contactTitle: "Ready to get behind the wheel?",
        contactSubtitle: "Leave your details and our team will contact you within one business day.",
        nameLabel: "Full name",
        namePlaceholder: "Alex Driver",
        phoneLabel: "Phone number",
        phonePlaceholder: "+1 555 0100",
        modelLabel: "Preferred model",
        modelOptionSedan: "CityLine Sedan",
        modelOptionSUV: "TrailMaster SUV",
        modelOptionEV: "VoltX Electric",
        messageLabel: "Message",
        messagePlaceholder: "I would like to schedule a test drive next week.",
        submitButton: "Send request",
        footerText: "© 2024 AutoDrive Market. All rights reserved.",
        footerInventory: "Inventory",
        footerContact: "Contact"
    },
    ar: {
        siteTitle: "سوق أوتودرَايڤ",
        brand: "سوق أوتودرَايڤ",
        heroTitle: "اعثر على سيارتك المثالية في دقائق.",
        heroSubtitle: "تصفح مجموعتنا المختارة من السيارات الجديدة والمستعملة الجاهزة للتسليم الفوري.",
        browseInventory: "تصفح السيارات",
        inventoryTitle: "سيارات مختارة",
        sedanName: "سيدان سيتي لاين 2023",
        sedanPrice: "28,500 دولار",
        sedanFeature1: "محرك توربو 1.5 لتر",
        sedanFeature2: "مثبت سرعة ذكي",
        sedanFeature3: "سقف بانورامي",
        suvName: "دفع رباعي تريل ماستر",
        suvPrice: "44,900 دولار",
        suvFeature1: "محرك V6 سعة 3.0 لتر",
        suvFeature2: "كاميرات 360 درجة",
        suvFeature3: "مقصورة جلدية",
        evName: "فولت إكس الكهربائية",
        evPrice: "35,200 دولار",
        evFeature1: "مدى 400 كم",
        evFeature2: "شحن سريع خلال 30 دقيقة",
        evFeature3: "مساعد قيادة متطور",
        bookTestDrive: "احجز تجربة قيادة",
        servicesTitle: "خدمات تناسب احتياجاتك",
        financingTitle: "تمويل مرن",
        financingText: "اختر من بين خطط التمويل البنكية والداخلية مع موافقة فورية.",
        warrantyTitle: "ضمان معتمد",
        warrantyText: "كل سيارة تشمل ضمانًا لمدة عامين ومساعدة على الطريق مجانًا.",
        deliveryTitle: "توصيل لجميع المدن",
        deliveryText: "نقوم بالتوصيل إلى جميع المدن الرئيسية خلال 72 ساعة من إتمام الشراء.",
        contactTitle: "جاهز لتجربة القيادة؟",
        contactSubtitle: "اترك بياناتك وسيتواصل معك فريقنا خلال يوم عمل واحد.",
        nameLabel: "الاسم الكامل",
        namePlaceholder: "ألكس درايفر",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "+966 55 501 000",
        modelLabel: "الموديل المفضل",
        modelOptionSedan: "سيدان سيتي لاين",
        modelOptionSUV: "تريل ماستر",
        modelOptionEV: "فولت إكس",
        messageLabel: "رسالتك",
        messagePlaceholder: "أرغب في حجز تجربة قيادة الأسبوع القادم.",
        submitButton: "إرسال الطلب",
        footerText: "© 2024 سوق أوتودرَايڤ. جميع الحقوق محفوظة.",
        footerInventory: "السيارات",
        footerContact: "تواصل معنا"
    }
};

function setLanguage(lang) {
    const html = document.documentElement;
    const body = document.body;

    if (!translations[lang]) return;

    const currentTranslations = translations[lang];

    document.querySelectorAll('[data-translate]').forEach((node) => {
        const key = node.dataset.translate;
        if (currentTranslations[key]) {
            if (node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea') {
                node.placeholder = currentTranslations[key];
            } else if (node.tagName.toLowerCase() === 'option') {
                node.textContent = currentTranslations[key];
            } else {
                node.textContent = currentTranslations[key];
            }
        }
    });

    document.title = currentTranslations.siteTitle;
    html.lang = lang === 'ar' ? 'ar' : 'en';
    body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('.lang-switch').forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
}

function initializeLanguageSwitcher() {
    const switchers = document.querySelectorAll('.lang-switch');
    switchers.forEach((button) => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            localStorage.setItem('preferredLanguage', lang);
            setLanguage(lang);
        });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);
}

document.addEventListener('DOMContentLoaded', initializeLanguageSwitcher);
