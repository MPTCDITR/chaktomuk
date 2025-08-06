import type { ui } from "@/i18n/ui";

export interface StateProps {
  title: keyof (typeof ui)["en"];
  count: number;
  header: string;
}

type StateType = Omit<StateProps, "header">;

export const states: StateType[] = [
  {
    title: "state.title.1",
    count: 3490,
  },
  {
    title: "state.title.2",
    count: 3340,
  },
  {
    title: "state.title.3",
    count: 502000,
  },
];

export const stateNumberDisplay = (stateNum: number): string => {
  if (stateNum > 1000) {
    return `${(stateNum / 1000).toFixed(1)}K+`;
  } else {
    return stateNum.toString();
  }
};
