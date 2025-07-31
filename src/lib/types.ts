import { defaultLang, languages } from "@/i18n/ui";

import { ui } from "@/i18n/ui";

export type UiTranslateKey = keyof (typeof ui)[typeof defaultLang];

export type TypeLang = keyof typeof languages;
