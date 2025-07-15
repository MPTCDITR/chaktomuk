export interface StateProps {
  title: string;
  count: number;
  header: string;
}

type StateType = Omit<StateProps, "header">;

export const states: StateType[] = [
  {
    title: "Users",
    count: 340,
  },
  {
    title: "Processed Flows",
    count: 3340,
  },
  {
    title: "Total Processes",
    count: 502000,
  },
];

export const stateNumberDisplay = (stateNum: number) => {
  if (stateNum > 1000) {
    return `${(stateNum / 1000).toFixed(1)}K+`;
  } else {
    return stateNum.toString();
  }
};
