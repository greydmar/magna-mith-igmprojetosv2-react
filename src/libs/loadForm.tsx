import { Questionario } from "src/types";

export const loadForm = (data: Questionario) => {
  return {
    ...data,

    questoes: data?.questoes?.map((item) => {
      return {
        ...item,
        textoJustificativa: item.textoJustificativa??null,
        rating: item.rating??null,
      };
    }),
  };
};
