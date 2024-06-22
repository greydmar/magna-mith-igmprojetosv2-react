import { Questao } from "src/types";

export const calculoIndice = (questions: Questao[], bar: boolean = true): number => {
  const rating: number[] = [];
  let total = 0;

  questions?.map((item) => {
    if (item?.rating) {
      total += item?.rating > 2 ? 1 : 0;
      rating?.push(item?.rating);
    }
  });

  if (!rating?.length) return 0;

  
  return Number(((total / rating?.length) * (bar ? 100 : 1)).toFixed(2));
};
