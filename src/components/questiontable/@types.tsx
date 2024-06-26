import { Questao } from "src/types";

export type PropsQuestionTable = {
  children: React.ReactNode;
};

export type PropsQuestionCell = {
  children: React.ReactNode;
  width?: string;
};

export type PropsQuestionRow = {
  question: Questao;
  index: number;
};

export type PropsQuestion = {
  index: number;
  question: Questao;
};

export type PropsJustification = {
  index: number;
  question: Questao;
};
