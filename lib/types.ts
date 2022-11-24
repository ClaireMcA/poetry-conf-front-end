export type Sessions = {
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

export type Panels = {
  _id: string;
  sessionId: string;
  title: string;
  location: string;
};

export type Papers = {
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