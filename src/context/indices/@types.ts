import { FormQuestion, Question } from "src/types";

export type PropsIndiceContext = {
  listQuestion: FormQuestion[];
  idStep: string,
  indice: number,

  setIndice: React.Dispatch<React.SetStateAction<number>>,
  setIdStep: React.Dispatch<React.SetStateAction<string>>,
  handleLoadList: (form: FormQuestion[]) => void;
  handleClearList: (idFrom: number) => void;
  handleSetQuestion: (idForm: number, question: Question) => void;
  handleClearQuestion: (idForm: number, idQuestion: number) => void;
};

export type PropsIndiceProvider = {
  children: React.ReactNode | React.ReactNode[];
};
