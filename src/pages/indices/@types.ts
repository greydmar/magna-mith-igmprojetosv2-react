import { FieldValues, UseFormReturn } from "react-hook-form";
import { FormQuestion } from "src/types";

export type PropsUsePageIndices = {
   methods:  UseFormReturn<{ form: FormQuestion }, any, undefined>
}