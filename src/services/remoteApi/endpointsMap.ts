import { TypeBackend } from "@models";

export const EndpointsMap = {
  
  forBackend: (lang: TypeBackend)=>{
    if (lang=="JAVA")
      return EndpointsMap.JAVA;
    return EndpointsMap.DOT_NET;
  },

  JAVA : {
    listaIndices: "indices",
    novoQuestionario: "questionario/novo",
    calculoIGF: "questionario/calculoIGF",
    finalizado: "questionario/finalizado"
  },

  DOT_NET : {
    listaIndices: "indices",
    novoQuestionario: "questionario",
    calculoIGF: "questionario/calculoIGF",
    finalizado: "questionario/finalizado"
  }
};