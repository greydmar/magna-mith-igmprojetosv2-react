import { FormQuestion } from "src/types";
import { formSchema } from "../validations";

export const handleValidFormQuestion = async (form: FormQuestion) => {
  try {
    await formSchema.validate(form);
    return { isValid: true, form };
  } catch (error) {
    return { isValid: false, form, errors: error };
  }
};
