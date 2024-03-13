import { FormQuestion } from "src/types";

export const loadForm = (data: FormQuestion) => {
  return {
    ...data,
    questions: data?.questions?.map((item) => {
      return {
        ...item,
        justify: undefined,
        rating: undefined,
      };
    }),
  };
};
