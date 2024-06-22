import { Questionario } from "src/types";
import { formSchema } from "../validations";

export const handleValidateQuestionario = async (form: Questionario) => {
  try {
    await formSchema.validate(form);
    return { isValid: true, form };
  } catch (error) {
    return { isValid: false, form, errors: error };
  }
};
