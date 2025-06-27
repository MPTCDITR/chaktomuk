// src/i18n/ui.ts
export const languages = {
  en: "English",
  km: "ខ្មែរ",
};

export const defaultLang = "km";

export const ui = {
  en: {
    "hero.title.1": "Chaktomuk Digital",
    "hero.title.2": "Platform",
    "hero.description":
      "Chaktomuk is a robust digital workspace created by the Ministry of Post and Telecommunications (MPTC) to enhance government efficiency in Cambodia. It aims to simplify internal workflows and foster collaboration, enabling agencies to operate more effectively and transparently in a digital landscape.",
    "site.title": "Chaktomuk Digital Platform", // New key for logo alt text
    "header.homeLink": "Home", // Example for a home link text if you add one
    "welcome.message": "Welcome to our site!",
    "language.switcher": "Switch Language",
    "site.footerText": "My Multilingual Site",
    // ... other English translations
  },
  km: {
    "hero.title.1": "ថ្នាលចតុមុខ",
    "hero.title.2": "ឌីជីថល",
    "hero.description":
      "ថ្នាលចតុមុខគឺជាកន្លែងធ្វើការឌីជីថលដ៏រឹងមាំដែលបង្កើតឡើងដោយក្រសួងប្រៃសណីយ៍ និង ទូរគមនាគមន៍ (MPTC) ដើម្បីបង្កើនប្រសិទ្ធភាពរបស់រដ្ឋាភិបាលក្នុងប្រទេសកម្ពុជា។ វាមានគោលបំណងធ្វើឱ្យលំហូរការងារផ្ទៃក្នុងមានភាពសាមញ្ញ និងជំរុញកិច្ចសហការ ដែលអនុញ្ញាតឱ្យភ្នាក់ងារធ្វើប្រតិបត្តិការកាន់តែមានប្រសិទ្ធភាព និងតម្លាភាពនៅក្នុងទិដ្ឋភាពឌីជីថល។",
    "site.title": "ថ្នាលចតុមុខឌីជីថល",
    "header.homeLink": "ទំព័រដើម", // Example for a home link text
    "welcome.message": "សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់យើង!",
    "language.switcher": "ប្តូរភាសា",
    "site.footerText": "គេហទំព័រពហុភាសារបស់ខ្ញុំ",
    // ... other Khmer translations
  },
} as const;
