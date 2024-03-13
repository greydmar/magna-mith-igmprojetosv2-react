import { createContext, useContext, useState } from "react";
import { PropsIndiceContext, PropsIndiceProvider } from "./@types";
import { FormQuestion } from "src/types";

const IndiceContext = createContext<PropsIndiceContext>({
  listQuestion: [],

  handleLoadList: () => {},
  handleClearList: () => {},
  handleSetQuestion: () => {},
  handleClearQuestion: () => {},
});

export const IndiceProvider: React.FC<PropsIndiceProvider> = ({ children }) => {
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
          listQuestion,
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
