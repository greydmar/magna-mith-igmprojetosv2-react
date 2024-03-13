import { Question } from "src/types";

export type PropsQuestionTable = {
  children: React.ReactNode;
};

export type PropsQuestionCell = {
  children: React.ReactNode;
  width?: string;
};

export type PropsQuestionRow = {
  question: Question;
  index: number;
};

export type PropsQuestion = {
  index: number;
  question: Question;
};

export type PropsJustification = {
  index: number;
  question: Question;
};
