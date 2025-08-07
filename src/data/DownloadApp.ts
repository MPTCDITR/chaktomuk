import type { AppDownloadCardProps } from "@/lib/types";

import appStoreIcon from "@/assets/images/playstore.png";
import googlePlayIcon from "@/assets/images/appstore.png";

export const DownloadApp: Array<AppDownloadCardProps> = [
  {
    title: "Chaktomuk",
    appIcon: appStoreIcon,
    appName: "App Store",
  },
  {
    title: "Chaktomuk",
    appIcon: googlePlayIcon,
    appName: "Google Play",
  },
];
