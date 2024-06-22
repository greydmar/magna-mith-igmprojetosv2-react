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

export type Indice = {
  id: string;
  codigoIndice: string;
  descricao?: string | null;
};

export type Questao = {
  id: string;
  texto: string;
  rating?: number | null;
  versao: number;
  textoJustificativa?: string | null;
};

export type Questionario = {
  id: string;
  codigoIndice: string;
  ratingCalculado?: number|null;
  versao: number;
  questoes: Questao[];
};