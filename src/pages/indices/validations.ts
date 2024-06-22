import { Questao } from "@models";
import * as yup from "yup";

const questionSchema = yup.object<Questao>({
  textoJustificativa: yup
    .string()
    .test("required", "Justificativa é obrigatória", (value, fields) => {
      if (fields.parent.rating == 0 || fields.parent.rating == 5) {
        return true;
      }

      if (!value?.trim()) {
        return false;
      }

      return true;
    }),
  rating: yup.number(),
});

export const formSchema = yup.object().shape({
  id: yup.string().required(),
  questoes: yup.array().of(questionSchema),
});
