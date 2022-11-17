export type Session = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  description: string;
  isMulti: boolean;
  panel: Panel[];
};

export type Panel = {
  id: string;
  title: string;
};
