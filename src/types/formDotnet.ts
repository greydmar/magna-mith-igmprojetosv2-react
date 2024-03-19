export type FormDotnet = {
  codigoAvaliacao: string;
  nomeExibicao: string;
  qtdItensConsiderados: number;
  indiceCalculado: number;
  situacao: string;
  item: ItensDotnet[];
};

export type ItensDotnet = {
  codigoItem: string;
  ordinal: number;
  textoApresentacao: string;
  situacao: string;
  pesoAtribuido: number;
  justificativaAtribuida: string;
};
