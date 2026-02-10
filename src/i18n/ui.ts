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
    "site.description":
      "Chaktomuk is a robust digital workspace developed by the Ministry of Post and Telecommunications (MPTC) to improve government efficiency in Cambodia. It aims to simplify internal workflows and strengthen collaboration, enabling agencies to operate more effectively and transparently in a digital environment.",

    // nav
    "nav.home": "Home",

    // hero
    "hero.title.1": "Chaktomuk",
    "hero.title.2": "Digital Platform",
    "hero.quote": "Digital Government Workspace",
    "hero.description":
      "Chaktomuk is a digital workspace developed by the Ministry of Post and Telecommunications (MPTC) to enhance government efficiency by digitalizing workflows, fostering collaboration, and enabling more effective operations.",

    // supported devices
    "supported.devices.heading": "Supported Devices",
    "supported.devices.description":
      "Chaktomuk works seamlessly across all devices desktop, tablet, and mobile providing a smooth and consistent experience on any screen size.",

    //state
    "state.title.1": "Users",
    "state.title.2": "Processed Flows",
    "state.title.3": "Total Processes",

    // Trusted By
    "trusted.title": "Trusted By",

    // Our Features
    "features.heading": "Our Features",
    "features.description":
      "Chaktomuk is a secure digital platform designed for government institutions, providing essential tools to streamline workflows, automate processes, and analyze operations.",
    "features.title.1": "Design",
    "features.description.1":
      "Easily design and configure digital workflows, create forms, build portals, and set up dashboards — all without writing code.",
    "features.title.2": "Automate",
    "features.description.2":
      "Automate tasks, track assignments, manage departments, and handle documents securely and efficiently.",
    "features.title.3": "Analytics",
    "features.description.3":
      "Gain real-time insights into staff activity, workflow performance, and departmental operations with advanced analytics tools.",
    "features.title.4": "Collaboration",
    "features.description.4":
      "Work seamlessly across departments to coordinate approvals, share information, and make decisions together through shared workflows and document access.",

    // Why Us
    "whyus.heading": "Benefits",
    "whyus.description.1":
      "Chaktomuk simplifies government work by bringing all essential tools into one secure digital platform. Users can design custom workflows, automate routine tasks, manage documents, and gain real-time insights — all in one place.",
    "whyus.title.1": "Work Smarter and Faster",
    "whyus.description.2":
      "Chaktomuk streamlines daily tasks and approvals through automation, helping users reduce manual work, prevent delays, and focus on what matters most.",
    "whyus.title.2": "Everything in One Place",
    "whyus.description.3":
      "With integrated tools for workflows, forms, documents, and analytics, Chaktomuk provides a single, centralized platform to manage all your work securely and efficiently.",
    "whyus.title.3": "Make Informed Decisions",
    "whyus.description.4":
      "Real-time dashboards and reports give users — especially leaders — clear visibility into operations, performance, and team activities, enabling smarter, data-driven decisions.",

    // about
    "about.heading": "About Us",
    "about.description":
      "We are committed to advancing Cambodia's postal, telecommunications, and ICT sectors by promoting reliable connectivity, accessible services, and modern infrastructure. Guided by principles of free market and social equity, we support digital transformation, improve government services, develop human capital through education and training, and foster innovation through investment and fair competition — contributing to national development and poverty reduction.",
    "about.mptcAltText":
      "Building of the Ministry of Post and Telecommunications of Cambodia",

    // Footer
    "footer.title.1": "Other Links",
    "footer.description.1": "Ministry of Post and Telecommunications",
    "footer.description.2": "Digital Government Committee",
    "footer.title.2": "Contact Us",
    "footer.description.3": "support@mptc.gov.kh",
    "footer.description.4":
      "Building 13, Monivong Blvd, Srah Chak, Daun Penh, Phnom Penh, Cambodia 120210",
    "footer.description.5": "Ministry of Post and Telecommunications",
    "footer.description.6": "Powered By",
    "footer.privacyPolicy": "Privacy Policy",
  },

  km: {
    "site.title": "ថ្នាលឌីជីថលចតុមុខ",
    "site.description":
      "ចតុមុខ គឺជាថ្នាលការងារឌីជីថលដែលបង្កើតឡើងដោយ ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ (ក.ប.ទ.) ដើម្បីពង្រឹងប្រសិទ្ធភាពការងាររដ្ឋាភិបាលជាតិ។ វាមានគោលបំណងសម្រួលលំហូរការងារផ្ទៃក្នុង និងលើកកម្ពស់សហប្រតិបត្តិការ ដើម្បីឲ្យស្ថាប័នអាចដំណើរការបានប្រសើរជាងមុន និងមានតម្លាភាពក្នុងបរិបទឌីជីថល។",

    // nav
    "nav.home": "ទំព័រដើម",

    // hero
    "hero.title.1": "ចតុមុខ",
    "hero.title.2": "ថ្នាលឌីជីថល",
    "hero.quote": "លំហូរការងារឌីជីថលរាជរដ្ឋាភិបាល",
    "hero.description":
      "ចតុមុខ គឺជាថ្នាលឌីជីថល ដែលបង្កើតឡើងដោយ ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ (ក.ប.ទ.) ដើម្បីពង្រឹងប្រសិទ្ធភាពការងាររដ្ឋាភិបាល តាមរយៈការធ្វើឌីជីថលនីយកម្មលំហូរការងារ លើកកម្ពស់សហប្រតិបត្តិការ និងបង្កើនប្រសិទ្ធភាពនៃប្រតិបត្តិការប្រចាំថ្ងៃ។",

    // supported devices
    "supported.devices.heading": "ឧបករណ៍ដែលគាំទ្រ",
    "supported.devices.description":
      "ថ្នាល ‘ចតុមុខ’ អាចប្រើប្រាស់បានលើឧបករណ៍គ្រប់ប្រភេទ កុំព្យូទ័រ ថេប្លេត និងទូរស័ព្ទ ដោយផ្តល់បទពិសោធន៍ប្រើប្រាស់រលូនលើអេក្រង់គ្រប់ទំហំ។",

    //state
    "state.title.1": "អ្នកប្រើប្រាស់",
    "state.title.2": "លំហូរការងារដែលបានដំណើរការ",
    "state.title.3": "លំហូរការងារសរុប",

    // trusted by
    "trusted.title": "ជាទីទុកចិត្តដោយ",

    // Features
    "features.heading": "លក្ខណៈពិសេសរបស់យើង",
    "features.description":
      "ចតុមុខ គឺជាថ្នាលឌីជីថលមានសុវត្ថិភាព សម្រាប់អង្គភាពរដ្ឋាភិបាល ដោយផ្តល់ឧបករណ៍សំខាន់ៗសម្រាប់សម្រួលលំហូរការងារ ធ្វើស្វ័យប្រវត្តិកម្ម និងការវិភាគប្រតិបត្តិការ។",
    "features.title.1": "ការរចនា",
    "features.description.1":
      "រចនា និងកំណត់រចនាសម្ព័ន្ធលំហូរឌីជីថល ងាយស្រួល ពុំចាំបាច់សរសេរកូដ — បង្កើតបែបបទ កសាងផតថល និងផ្ទាំងគ្រប់គ្រងបានយ៉ាងរហ័ស។",
    "features.title.2": "ស្វ័យប្រវត្តិកម្ម",
    "features.description.2":
      "ស្វ័យប្រវត្តិកម្មកិច្ចការ តាមដានការងារ គ្រប់គ្រងនាយកដ្ឋាន និងគ្រប់គ្រងឯកសារដោយសុវត្ថិភាព។",
    "features.title.3": "វិភាគ",
    "features.description.3":
      "ផ្តល់ឱ្យអ្នកប្រើប្រាស់នូវការយល់ដឹងតាមពេលវេលាជាក់ស្តែង លើសកម្មភាពបុគ្គលិក ប្រសិទ្ធភាពលំហូរការងារ និងប្រតិបត្តិការនាយកដ្ឋាន។",
    "features.title.4": "សហប្រតិបត្តិការ",
    "features.description.4":
      "សហការងាយស្រួលរវាងនាយកដ្ឋាន ដើម្បីអនុម័តកិច្ចការ ចែករំលែកព័ត៌មាន និងធ្វើសេចក្តីសម្រេចរួមតាមរយៈលំហូរ និងឯកសារចែករំលែក។",

    // why us
    "whyus.heading": "អត្ថប្រយោជន៍",
    "whyus.description.1":
      "សម្រួលការងាររដ្ឋាភិបាលដោយប្រមូលផ្តុំឧបករណ៍សំខាន់ៗទាំងអស់ក្នុងថ្នាលឌីជីថលតែមួយ។ អ្នកប្រើប្រាស់អាចរចនាលំហូរការងារផ្ទាល់ខ្លួន ធ្វើកិច្ចការប្រចាំថ្ងៃដោយស្វ័យប្រវត្តិ គ្រប់គ្រងឯកសារ និងទទួលបានការយល់ដឹងតាមពេលវេលាជាក់ស្តែង — ទាំងអស់នៅកន្លែងតែមួយ។",
    "whyus.title.1": "ធ្វើការលឿន និងឆ្លាតវៃ",
    "whyus.description.2":
      "ចតុមុខជួយកាត់បន្ថយការងារដោយដៃ កាត់បន្ថយពន្យារពេល និងជួយអនុវត្តកិច្ចការប្រចាំថ្ងៃឱ្យរលូនជាងមុនតាមរយៈស្វ័យប្រវត្តិកម្ម។",
    "whyus.title.2": "អ្វីៗទាំងអស់នៅកន្លែងតែមួយ",
    "whyus.description.3":
      "ជាមួយឧបករណ៍រួមបញ្ចូលសម្រាប់លំហូរការងារ បែបបទ ឯកសារ និងវិភាគ — ចតុមុខបានផ្តល់នូវថ្នាលកណ្ដាលមួយ ដើម្បីគ្រប់គ្រងការងារទាំងអស់ដោយមានប្រសិទ្ធភាព និងសុវត្ថិភាព។",
    "whyus.title.3": "សម្រេចចិត្តផ្អែកលើទិន្នន័យ",
    "whyus.description.4":
      "ផ្ទាំងគ្រប់គ្រង និងរបាយការណ៍តាមពេលវេលាជាក់ស្តែងជួយអ្នកដឹកនាំមើលឃើញបានច្បាស់លាស់លើប្រតិបត្តិការ ការអនុវត្ត និងសកម្មភាពក្រុម ដើម្បីសម្រេចចិត្តឆ្លាតវៃផ្អែកលើទិន្នន័យ។",

    // about
    "about.heading": "អំពីយើង",
    "about.description":
      "យើងខ្ញុំប្តេជ្ញាជំរុញវិស័យប្រៃសណីយ៍ ទូរគមនាគមន៍ និង ICT តាមរយៈការតភ្ជាប់ដែលអាចទុកចិត្តបាន សេវាដែលងាយប្រើ និងហេដ្ឋារចនាសម្ព័ន្ធទំនើប។ យើងគាំទ្រការផ្លាស់ប្តូរឌីជីថល ការកែលម្អសេវារាជការណ៍ និងការអប់រំ-បណ្តុះបណ្តាលធនធានមនុស្ស ព្រមទាំងលើកកម្ពស់ការច្នៃប្រឌិតតាមរយៈវិនិយោគ និងការប្រកួតប្រជែងយុត្តិធម៌ ដើម្បីរួមចំណែកអភិវឌ្ឍន៍ជាតិ និងកាត់បន្ថយភាពក្រីក្រ។",
    "about.mptcAltText": "អគារក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍",

    // Footer
    "footer.title.1": "តំណភ្ជាប់ផ្សេងៗ",
    "footer.description.1": "ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍",
    "footer.description.2": "គណៈកម្មាធិការរដ្ឋាភិបាលឌីជីថល",
    "footer.title.2": "ទំនាក់ទំនង",
    "footer.description.3": "support@mptc.gov.kh",
    "footer.description.4":
      "អគារលេខ ១៣ មហាវិថីព្រះមុនីវង្ស សង្កាត់ស្រះចក ខណ្ឌដូនពេញ រាជធានីភ្នំពេញ ១២០២១០",
    "footer.description.5": "ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍",
    "footer.description.6": "អភិវឌ្ឍដោយ",
    "footer.privacyPolicy": "គោលការណ៍ឯកជនភាព",
  },
} as const;
