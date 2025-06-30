// src/i18n/ui.ts
export const languages = {
  en: "English",
  km: "Khmer", 
};

export const defaultLang = "km";

// Define the type for all possible translation keys
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export const ui = {
  en: {
    "site.title": "Chaktomuk Digital Platform",
    // nav
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.contact": "Contact",
    // hero
    "hero.title.1": "Chaktomuk Digital ",
    "hero.title.2": "Platform",
    "hero.description":
      "Chaktomuk is a robust digital workspace created by the Ministry of Post and Telecommunications (MPTC) to enhance government efficiency in Cambodia. It aims to simplify internal workflows and foster collaboration, enabling agencies to operate more effectively and transparently in a digital landscape.",
    // about
    "about.heading": "About Us",
    "about.description":
      "We are committed to advancing Cambodia's Post, Telecommunications, and ICT sectors by promoting reliable connectivity, accessible services, and modern infrastructure. Guided by principles of free market and social equity, we support digital transformation, enhance government services, empower human capital through education and training, and foster innovation through investment and fair competition—contributing to national development and poverty reduction.",
    "about.mptcAltText":
      "Ministry of Post and Telecommunications of Cambodia building",
    "about.mptcFigCaption": "Ministry of Post and Telecommunications",

    // --- ADDED SEO/Meta Translations ---
    "seo.title": "Chaktomuk Digital Platform", 
    "seo.description":
      "Chaktomuk is a robust digital workspace created by the Ministry of Post and Telecommunications (MPTC) to enhance government efficiency in Cambodia. It aims to simplify internal workflows and foster collaboration, enabling agencies to operate more effectively and transparently in a digital landscape.",
    "seo.ogUrl": "https://chaktomok.gov.kh/",
    "seo.ogImage": "/images/logo-ctm.png", 
  
  },
  km: {
    "site.title": "ថ្នាលចតុមុខឌីជីថល",
    // nav
    "nav.home": "ទំព័រដើម",
    "nav.about": "អំពី​ពួកយើង",
    "nav.services": "សេវាកម្ម",
    "nav.contact": "ទំនាក់ទំនង",
    // hero
    "hero.title.1": "ថ្នាល",
    "hero.title.2": "ចតុមុខ",
    "hero.description":
      "ថ្នាលចតុមុខគឺជាកន្លែងធ្វើការឌីជីថលដ៏រឹងមាំមួយដែលបង្កើតឡើងដោយក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ (MPTC) ដើម្បីបង្កើនប្រសិទ្ធភាពរបស់រដ្ឋាភិបាលក្នុងប្រទេសកម្ពុជា។ វាមានគោលបំណងធ្វើឱ្យលំហូរការងារផ្ទៃក្នុងមានភាពសាមញ្ញ និងជំរុញកិច្ចសហការ ដែលអនុញ្ញាតឱ្យភ្នាក់ងារធ្វើប្រតិបត្តិការកាន់តែមានប្រសិទ្ធភាព និងតម្លាភាពនៅក្នុងទិដ្ឋភាពឌីជីថល។",
    // about
    "about.heading": "អំពីថ្នាលចតុមុខ",
    "about.description":
      "យើងប្តេជ្ញាជំរុញវិស័យប្រៃសណីយ៍ ទូរគមនាគមន៍ និង ICT របស់កម្ពុជា តាមរយៈការលើកកម្ពស់ការតភ្ជាប់ដែលអាចទុកចិត្តបាន សេវាដែលអាចចូលដំណើរការបាន និងហេដ្ឋារចនាសម្ព័ន្ធទំនើប។ ដឹកនាំដោយគោលការណ៍នៃទីផ្សារសេរី និងសមធម៌សង្គម យើងគាំទ្រដល់ការផ្លាស់ប្តូរឌីជីថល លើកកំពស់សេវាកម្មរដ្ឋាភិបាល ផ្តល់អំណាចដល់ធនធានមនុស្សតាមរយៈការអប់រំ និងការបណ្តុះបណ្តាល និងជំរុញការបង្កើតថ្មីតាមរយៈការវិនិយោគ និងការប្រកួតប្រជែងដោយយុត្តិធម៌ ដែលរួមចំណែកដល់ការអភិវឌ្ឍន៍ជាតិ និងការកាត់បន្ថយភាពក្រីក្រ។",
    "about.mptcAltText": "អគារក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍",
    "about.mptcFigCaption": "ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍",

    //  SEO/Meta Translations
    "seo.title": "ថ្នាលចតុមុខឌីជីថល", 
    "seo.description":
      "ចតុមុខ គឺជាកន្លែងធ្វើការឌីជីថលដ៏រឹងមាំមួយដែលបង្កើតឡើងដោយក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ (MPTC) ដើម្បីបង្កើនប្រសិទ្ធភាពរបស់រដ្ឋាភិបាលក្នុងប្រទេសកម្ពុជា។ វាមានគោលបំណងធ្វើឱ្យលំហូរការងារផ្ទៃក្នុងមានភាពសាមញ្ញ និងជំរុញកិច្ចសហការ ដែលអនុញ្ញាតឱ្យភ្នាក់ងារធ្វើប្រតិបត្តិការកាន់តែមានប្រសិទ្ធភាព និងតម្លាភាពនៅក្នុងទិដ្ឋភាពឌីជីថល។",
    "seo.ogUrl": "https://chaktomok.gov.kh/",
    "seo.ogImage": "/images/logo-ctm.png",

  },
} as const;
