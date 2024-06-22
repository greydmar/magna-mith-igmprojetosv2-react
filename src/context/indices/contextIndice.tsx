import { createContext, useContext, useState } from "react";
import { PropsIndiceContext, PropsIndiceProvider } from "./@types";
import { Questionario, Indice } from "src/types";

const IndiceContext = createContext<PropsIndiceContext>({
    lQuestionarios: [],
    idStep: "",
    indice: 0,
    objIndice: null,
    setObjIndice: ()=>{},

    setIndice: () => {},
    setIdStep: () => {},
    handleLoadList: () => {},
    handleClearList: () => {},
    handleSetQuestion: () => {},
    handleClearQuestion: () => {},
});

export const IndiceProvider: React.FC<PropsIndiceProvider> = ({ children }) => {
  const [indice, setIndice] = useState<number>(0);
  const [idStep, setIdStep] = useState("");
  const [listQuestion, setListQuestion] = useState<Questionario[]>([]);
  const [objIndice, setObjIndice] = useState<Indice>({"id":"", "codigoIndice":""});

  const handleLoadList = (questionarios: Questionario[]) => {
    setListQuestion(questionarios);
  };

  const handleClearList = () => {
    setListQuestion([]);
  };

  const handleSetQuestion = () => {};

  const handleClearQuestion = () => {
    setIndice(0);
    setObjIndice({"id":"", "codigoIndice":""});
    setIdStep("");
    setListQuestion([]);
  };

  return (
    <>
      <IndiceContext.Provider
        value={{
            indice,
            idStep,
            objIndice,
            lQuestionarios: listQuestion,
            setIndice,
            setObjIndice,
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
