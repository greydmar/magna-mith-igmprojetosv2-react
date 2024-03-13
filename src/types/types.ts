import { SxProps, Theme } from "@mui/material";

export type StyleSx = SxProps<Theme>;

export type Routes = {
  path: string;
  element: React.ElementType;
  permission: string[];
};

export type AnyObject = Record<string, any>;

export type Backend = "dot.net" | "java";

export type Question = {
  itemId: number;
  text: string;
  rating?: number | null;
  justify?: string;
};

export type FormQuestion = {
  idForm: number;
  questions: Question[];
};
