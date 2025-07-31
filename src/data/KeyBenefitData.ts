import type { UiTranslateKey } from "@/lib/types";
import {
  ChartNoAxesCombined,
  ListTodo,
  ScrollText,
  type LucideProps,
} from "lucide-react";

export interface KeyBenefitDataProps {
  title: UiTranslateKey;
  description: UiTranslateKey;
  iconElement: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export const KeyBenefitData: KeyBenefitDataProps[] = [
  {
    title: "whyus.title.1",
    description: "whyus.description.2",
    iconElement: ListTodo,
  },
  {
    title: "whyus.title.2",
    description: "whyus.description.3",
    iconElement: ScrollText,
  },
  {
    title: "whyus.title.3",
    description: "whyus.description.4",
    iconElement: ChartNoAxesCombined,
  },
];
