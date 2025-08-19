import type { AppDownloadCardProps } from "@/lib/types";

import appStoreIcon from "@/assets/images/Apple-Logosu.png";
import googlePlayIcon from "@/assets/images/Android_robot.svg.png";

export const DownloadApp: Array<AppDownloadCardProps> = [
  {
    title: "Chaktomuk",
    appIcon: googlePlayIcon,
    appName: "Android",
  },
  {
    title: "Chaktomuk",
    appIcon: appStoreIcon,
    appName: "iOS",
  },
];
