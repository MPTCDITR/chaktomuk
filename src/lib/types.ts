import { defaultLang, languages } from "@/i18n/ui";

import { ui } from "@/i18n/ui";
import type { ImageMetadata } from "astro";

export type UiTranslateKey = keyof (typeof ui)[typeof defaultLang];

export type TypeLang = keyof typeof languages;

export type AppName = "Android" | "IOS";

export interface AppDownloadCardProps {
  title: string;
  appIcon: ImageMetadata;
  appName: AppName;
}