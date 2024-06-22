import { UseFormReturn } from "react-hook-form";
import { Questionario } from "src/types";

export type PropsUsePageIndices = {
   methods:  UseFormReturn<{ form: Questionario }, any, undefined>
}