import type { UiTranslateKey } from "@/lib/types";

// assets
import designFeature from "@/assets/images/Design.jpg";
import automateFeature from "@/assets/images/Automate.jpg";
import analyticFeature from "@/assets/images/Analytic.jpg";
import collaborationFeature from "@/assets/images/Collabration.jpg";

export interface FeatureCardProps {
  srcImage: ImageMetadata;
  alt: string;
  title: UiTranslateKey;
  description: UiTranslateKey;
}

export const featureData: Array<FeatureCardProps> = [
  {
    srcImage: designFeature,
    alt: "design feature",
    title: "features.title.1",
    description: "features.description.1",
  },
  {
    srcImage: automateFeature,
    alt: "automation feature",
    title: "features.title.2",
    description: "features.description.2",
  },
  {
    srcImage: analyticFeature,
    alt: "analytic feature",
    title: "features.title.3",
    description: "features.description.3",
  },
  {
    srcImage: collaborationFeature,
    alt: "collaboration feature",
    title: "features.title.4",
    description: "features.description.4",
  },
];
