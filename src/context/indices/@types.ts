import { Questionario, Questao, Indice } from "src/types";

export type PropsIndiceContext = {
  lQuestionarios: Questionario[];
  idStep: string,
  indice: number,
  objIndice?: Indice | null,

  setIndice: React.Dispatch<React.SetStateAction<number>>,
  setObjIndice: React.Dispatch<React.SetStateAction<Indice>>,
  setIdStep: React.Dispatch<React.SetStateAction<string>>,
  handleLoadList: (form: Questionario[]) => void;
  handleClearList: (id: string) => void;
  handleSetQuestion: (id: string, questao: Questao) => void;
  handleClearQuestion: () => void;
};

export type PropsIndiceProvider = {
  children: React.ReactNode | React.ReactNode[];
};
