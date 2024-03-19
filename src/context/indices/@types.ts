import { FormQuestion, Question } from "src/types";

export type PropsIndiceContext = {
  listQuestion: FormQuestion[];
  idStep: string,
  indice: number | string,

  setIndice: React.Dispatch<React.SetStateAction<number | string>>,
  setIdStep: React.Dispatch<React.SetStateAction<string>>,
  handleLoadList: (form: FormQuestion[]) => void;
  handleClearList: (idFrom: number) => void;
  handleSetQuestion: (idForm: number, question: Question) => void;
  handleClearQuestion: () => void;
};

export type PropsIndiceProvider = {
  children: React.ReactNode | React.ReactNode[];
};
