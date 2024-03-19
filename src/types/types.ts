import { SxProps, Theme } from "@mui/material";

export type StyleSx = SxProps<Theme>;

export type Routes = {
  path: string;
  element: React.ElementType;
  permission: string[];
};

export type AnyObject = Record<string, any>;

export type Backend = "dot.net" | "java";

export type TypeBackend = "DOT_NET" | "JAVA";

export type Question = {
  itemId: string;
  text: string;
  rating?: number | null;
  justify?: string;
};

export type FormQuestion = {
  idForm: string;
  questions: Question[];
};

export type InciceJava = {
  id: string;
  descricao: string;
};

export type InciceDotnet = {
  id: string;
  codigoIndice: string;
  nomeExibicao: string;
};
