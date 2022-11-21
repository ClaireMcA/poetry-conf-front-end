export type Session = {
  _id: string;
  title: string;
  category: string;
  description: string;
  endTime: Date;
  isMulti: boolean;
  location: string;
  speaker: Array<Speaker>
  startTime: Date;
}

export type Panel = {
  _id: string;
  sessionId: string;
  title: string;
  loaction: string;
};

export type Paper = {
  _id: string;
  title: string;
  speaker: Array<Speaker>
  panelId: string;
  order: number;
  registeredEmails: Array<string>;
  description: string;
}

export interface props {
  day: number;
}

export type Speaker = {
  firstName: string;
  lastName: string;
  bio: string;
  affiliation: string;
}