export type StoryType = "top" | "new" | "best";

export type ItemType = "job" | "story" | "comment" | "poll" | "pollopt";

export type JobItem = {
  id: number;
  type: "job";
  by: string;
  time: number;
  text: string;
  url: string;
  score: number;
  title: string;
  deleted?: boolean;
  dead?: boolean;
};
export type StoryItem = {
  id: number;
  type: "story";
  by: string;
  time: number;
  text: string;
  kids: number[];
  url?: string;
  score: number;
  title: string;
  descendants: number;
  deleted?: boolean;
  dead?: boolean;
};
export type CommentItem = {
  id: number;
  type: "comment";
  by: string;
  time: number;
  text: string;
  kids: number[];
  parent: number;
  deleted?: boolean;
  dead?: boolean;
};
export type PollItem = {
  id: number;
  type: "poll";
  by: string;
  time: number;
  text: string;
  kids: number[];
  score: number;
  title: string;
  parts: number[];
  descendants: number;
  deleted?: boolean;
  dead?: boolean;
};
export type PollOptItem = {
  id: number;
  type: "pollopt";
  by: string;
  time: number;
  text: string;
  score: number;
  poll: number;
  deleted?: boolean;
  dead?: boolean;
};

export type Item
  = JobItem
  | StoryItem
  | CommentItem
  | PollItem
  | PollOptItem

export type User = {
  id: number;
  created: number;
  karma: number;
  about?: string;
  submitted?: number[];
};
