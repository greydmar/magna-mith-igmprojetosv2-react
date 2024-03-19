import { createContext, useContext, useState } from "react";
import { PropsIndiceContext, PropsIndiceProvider } from "./@types";
import { FormQuestion } from "src/types";

const IndiceContext = createContext<PropsIndiceContext>({
  listQuestion: [],
  idStep: "",
  indice: 0,


  setIndice: () => {},
  setIdStep: () => {},
  handleLoadList: () => {},
  handleClearList: () => {},
  handleSetQuestion: () => {},
  handleClearQuestion: () => {},
});

export const IndiceProvider: React.FC<PropsIndiceProvider> = ({ children }) => {
  const [indice, setIndice] =  useState(0)
  const [idStep, setIdStep] =  useState("")
  const [listQuestion, setListQuestion] = useState<FormQuestion[]>([]);

  const handleLoadList = (formQuestion: FormQuestion[]) => {
    setListQuestion(formQuestion);
  };

  const handleClearList = () => {
    setListQuestion([]);
  };

  const handleSetQuestion = () => {};

  const handleClearQuestion = () => {};

  return (
    <>
      <IndiceContext.Provider
        value={{
          indice,
          idStep,
          listQuestion,
          setIndice,
          setIdStep,
          handleLoadList,
          handleClearList,
          handleSetQuestion,
          handleClearQuestion,
        }}
      >
        {children}
      </IndiceContext.Provider>
    </>
  );
};

export const useIndice = () => {
  return useContext(IndiceContext);
};
