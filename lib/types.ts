export type Session = {
  _id: string;
  title: string;
  category: string;
  description: string;
  endTime: Date;
  isMulti: boolean;
  location: string;
  speaker: Array<object>
  startTime: Date;
};

export type Panel = {
  id: string;
  title: string;
};

