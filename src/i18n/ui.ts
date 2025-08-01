// src/i18n/ui.ts
export const languages = {
  en: "English",
  km: "Khmer",
};

export const defaultLang = "km";

export type SupportedLanguage = keyof typeof languages;

// Define the type for all possible translation keys
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export const ui = {
  en: {
    "site.title": "Chaktomuk Digital Platform",
    "site.description": "Chaktomuk is a robust digital workspace created by the Ministry of Post and Telecommunications (MPTC) to enhance government efficiency in Cambodia. It aims to simplify internal workflows and foster collaboration, enabling agencies to operate more effectively and transparently in a digital landscape.",

    // nav
    "nav.home": "Home",

    // hero
    "hero.title.1": "Chaktomuk Digital ",
    "hero.title.2": "Platform",
    "hero.description": "Chaktomuk is a robust digital workspace created by the Ministry of Post and Telecommunications (MPTC) to enhance government efficiency in Cambodia. It aims to simplify internal workflows and foster collaboration, enabling agencies to operate more effectively and transparently in a digital landscape.",

    //state
    "state.title.1": "User",
    "state.title.2": "Processed Flows",
    "state.title.3": "Total Processes",

    // Trusted By
    "trusted.title": "Trusted By",

    // Our Features
    "features.heading": "Our Features",
    "features.description": "Chaktomuk is a secure digital platform designed for government entities, offering vital tools for streamlining workflows, automating tasks, and analyzing operations. ",
    "features.title.1": "Design",
    "features.description.1": "Design and configuration of digital workflows easily and effortlessly, build forms, create portals and dashboards — all without writing code.",
    "features.title.2": "Automate",
    "features.description.2": "Simplifies work by automating tasks, tracking assignments, managing departments, and securely handling documents ",
    "features.title.3": "Analytic",
    "features.description.3": "Provides users with real-time insights into staff activity, workflow performance, and departmental operations and analytics tools. ",

    // Why Us
    "whyus.heading": "Why Should Be Us?",
    "whyus.description.1": "simplifies government work by bringing everything into one secure digital platform. It helps users design custom workflows, automate routine tasks, manage documents, and gain real-time insights — all in one place.",
    "whyus.title.1": "Work Smarter and Faster",
    "whyus.description.2": "Chaktomuk streamlines everyday tasks and approvals through automation, helping users reduce manual work, avoid delays, and focus on what matters most.",
    "whyus.title.2": "Everything In One Plance",
    "whyus.description.3": "With integrated tools for workflow, forms, documents, and analytics, Chaktomuk provides a single, centralized platform to manage all your work efficiently and securely.",
    "whyus.title.3": "Make Informed Decisions",
    "whyus.description.4": "Real-time dashboards and reports give users — especially leaders — clear visibility into operations, performance, and team activity, supporting smarter, data-driven decisions.",

    // about
    "about.heading": "About Us",
    "about.description":
      "We are committed to advancing Cambodia's Post, Telecommunications, and ICT sectors by promoting reliable connectivity, accessible services, and modern infrastructure. Guided by principles of free market and social equity, we support digital transformation, enhance government services, empower human capital through education and training, and foster innovation through investment and fair competition—contributing to national development and poverty reduction.",
    "about.mptcAltText":
      "Ministry of Post and Telecommunications of Cambodia building",
    
    // Footer
    "footer.title.1": "Other Links",
    "footer.description.1": "Ministry Of Post And Telecommunication",
    "footer.description.2": "Digital Government Committee",
    "footer.title.2": "Contact us",
    "footer.description.3": "support@mptc.gov.kh",
    "footer.description.4": "Building 13, Monivong Blvd, Sangkat Srah Chak, Khan Daun Penh, Phnom Penh, Cambodia, 120210",
    "footer.description.5": "Ministry Of Post And Telecommunications",
    "footer.description.6": "Powered By",

  
  },
  km: {
    "site.title": "ថ្នាលចតុមុខឌីជីថល",
    "site.description": "Chaktomuk is a robust digital workspace created by the Ministry of Post and Telecommunications (MPTC) to enhance government efficiency in Cambodia. It aims to simplify internal workflows and foster collaboration, enabling agencies to operate more effectively and transparently in a digital landscape.",
    // nav

    "nav.home": "ទំព័រដើម",
    // hero

    "hero.title.1": "ថ្នាលចតុមុខ",
    "hero.title.2": "ឌីជីថល",
    "hero.description":
      "ចតុមុខគឺជាថ្នាលឌីជីថលដែលអាចប្រតិបត្តិការងារបានយ៉ាងប្រសិទ្ធភាពបង្កើតឡើងដោយក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ (ប.ទ.ក) ដើម្បីបង្កើនប្រសិទ្ធភាពរបស់រដ្ឋាភិបាលក្នុងប្រទេសកម្ពុជា។ គោលបំណងគឺធ្វើឱ្យដំណើរការងារផ្ទៃក្នុងមានភាពងាយស្រួល និងជំរុញកិច្ចសហការ ដែលអនុញ្ញាតឱ្យភ្នាក់ងារធ្វើប្រតិបត្តិការប្រកបដោយប្រសិទ្ធភាព និងតម្លាភាពក្នុងទិដ្ឋភាពឌីជីថល។",

    //state
    "state.title.1": "អ្នកប្រើប្រាស់",
    "state.title.2": "ដំណើរការងារដែលបានដំណើរការរួច",
    "state.title.3": "ចំនួនដំណើរការងារសរុប",

    //Trusted by
    "trusted.title": "ជាទីទុកចិត្តដោយ",

    // Our Features
    "features.heading": "លក្ខណៈពិសេសរបស់យើង",
    "features.description": "ចតុមុខគឺជាថ្នាលឌីជីថលដែលមានសុវត្ថិភាពដែលត្រូវបានរចនាឡើងសម្រាប់អង្គភាពរដ្ឋាភិបាល ដោយផ្តល់ជូននូវឧបករណ៍សំខាន់ៗសម្រាប់សម្រួលដំណើរការងារ ការងារស្វ័យប្រវត្តិកម្ម និងការវិភាគប្រតិបត្តិការ។",
    "features.title.1":"ភាពរចនាសម្ព័ន្ធ",
    "features.description.1": "ការរចនា និងការកំណត់រចនាសម្ព័ន្ធនៃដំណើរការងារតាមបែបឌីជីថលដោយមានភាពងាយស្រួលនិងមិនចាំបាច់មានការខិតខំប្រឹងប្រែង បង្កើតទម្រង់ បង្កើតផតថល និងផ្ទាំងគ្រប់គ្រង — ទាំងអស់ដោយមិនចាំបាច់សរសេរកូដ។",
    "features.title.2": "ភាពស្វ័យប្រវត្តិ",
    "features.description.2": "សម្រួលការងារដោយស្វ័យប្រវត្តិកម្ម តាមដានកិច្ចការ គ្រប់គ្រងការងារនាយកដ្ឋាន និងការគ្រប់គ្រងឯកសារប្រកបដោយសុវត្ថិភាព។",
    "features.title.3": "ភាពវិភាគ",
    "features.description.3": "ផ្តល់ឱ្យអ្នកប្រើប្រាស់នូវការយល់ដឹងតាមពេលវេលាជាក់ស្តែងអំពីសកម្មភាពបុគ្គលិក ដំណើរការការងារ និងប្រតិបត្តិការរបស់នាយកដ្ឋាន និងឧបករណ៍វិភាគ។",
    
    // Why Us
    "whyus.heading": "ហេតុអ្វីត្រូវជាយើង?",
    "whyus.description.1": "សម្រួលការងាររបស់រដ្ឋាភិបាលដោយនាំយកអ្វីគ្រប់យ៉ាងទៅក្នុងថ្នាលឌីជីថលដែលមានសុវត្ថិភាពមួយ។ វាជួយអ្នកប្រើប្រាស់រចនាដំណើរការងារផ្ទាល់ខ្លួន ធ្វើកិច្ចការប្រចាំថ្ងៃដោយស្វ័យប្រវត្តិ គ្រប់គ្រងឯកសារ និងទទួលបានការយល់ដឹងតាមពេលវេលាជាក់ស្តែង — ទាំងអស់នៅកន្លែងតែមួយ។",
    "whyus.title.1": "ធ្វើការឆ្លាតជាងមុន និងលឿនជាងមុន",
    "whyus.description.2": "ចតុមុខសម្រួលកិច្ចការប្រចាំថ្ងៃ និងការអនុម័តតាមរយៈស្វ័យប្រវត្តិកម្ម ជួយអ្នកប្រើប្រាស់កាត់បន្ថយការងារដោយដៃ ជៀសវាងការពន្យារពេល និងផ្តោតលើអ្វីដែលសំខាន់បំផុត។",
    "whyus.title.2": "អ្វីគ្រប់យ៉ាងនៅកន្លែងតែមួយ",
    "whyus.description.3": "ជាមួយនឹងឧបករណ៍រួមបញ្ចូលគ្នាសម្រាប់ដំណើរការងារ ទម្រង់បែបបទ ឯកសារ និងការវិភាគ ចតុមុខផ្តល់នូវថ្នាលកណ្តាលតែមួយគត់ ដើម្បីគ្រប់គ្រងការងាររបស់អ្នកទាំងអស់ប្រកបដោយប្រសិទ្ធភាព និងសុវត្ថិភាព។",
    "whyus.title.3": "ធ្វើសេចក្តីសម្រេចផ្អែកលើទិន្នន័យ",
    "whyus.description.4": "ផ្ទាំងគ្រប់គ្រង និងរបាយការណ៍តាមពេលវេលាជាក់ស្តែងផ្តល់ឱ្យអ្នកប្រើប្រាស់ ជាពិសេសអ្នកដឹកនាំ — ភាពមើលឃើញច្បាស់នៅក្នុងប្រតិបត្តិការ ការអនុវត្ត និងសកម្មភាពក្រុម គាំទ្រដល់ការសម្រេចចិត្តដែលជំរុញដោយទិន្នន័យកាន់តែឆ្លាតវៃ។",

    // about
    "about.heading": "អំពីថ្នាលចតុមុខ",
    "about.description":
      "យើងខ្ញុំប្ដេជ្ញាចិត្តក្នុងការជំរុញវិស័យប្រៃសណីយ៍ ទូរគមនាគមន៍ និង ICT របស់កម្ពុជា តាមរយៈការលើកកម្ពស់ការតភ្ជាប់ដែលអាចទុកចិត្តបាន សេវាដែលអាចចូលដំណើរការបាន និងហេដ្ឋារចនាសម្ព័ន្ធទំនើប។ ដឹកនាំដោយគោលការណ៍នៃទីផ្សារសេរី និងសមធម៌សង្គម យើងគាំទ្រដល់ការផ្លាស់ប្តូរឌីជីថល លើកកំពស់សេវាកម្មរដ្ឋាភិបាល ផ្តល់អំណាចដល់ធនធានមនុស្សតាមរយៈការអប់រំ និងការបណ្តុះបណ្តាល និងជំរុញការបង្កើតថ្មីតាមរយៈការវិនិយោគ និងការប្រកួតប្រជែងដោយយុត្តិធម៌ ដែលរួមចំណែកដល់ការអភិវឌ្ឍន៍ជាតិ និងការកាត់បន្ថយភាពក្រីក្រ។",
    "about.mptcAltText": "អគារក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍",

        // Footer
    "footer.title.1": "បញ្ជាប់ផ្សេងៗ",
    "footer.description.1": "ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍",
    "footer.description.2": "គណៈកម្មាធិការរដ្ឋាភិបាលឌីជីថល",
    "footer.title.2": "ទំនាក់ទំនង ",
    "footer.description.3": "support@mptc.gov.kh",
    "footer.description.4": "អគារលេខ ១៣ មហាវិថីព្រះមុនីវង្សសង្កាត់ស្រះចក ខណ្ឌដូនពេញ រាជធានីភ្នំពេញ 120210",
    "footer.description.5": "ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍",
    "footer.description.6": " អភិវឌ្ឍដោយ",
    
  },
} as const;
