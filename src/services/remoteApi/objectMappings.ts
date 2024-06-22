import { Indice, Questao, Questionario } from '@models';
import { ServerModels } from './remoteModels';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Mapeamentos {
  export const mapFromServerModelIndice = (
    item: ServerModels.Indice,
  ): Indice => {
    return {
      id: item.id ?? 'falha',
      codigoIndice: item.nomeIndice ?? 'Erro: Falha ao obter codigoIndice',
      descricao: item.descricao ?? 'Erro: Falha ao obter descricao',
    };
  };

  export const mapFromServerModelIndices = (
    response: ServerModels.Indice[],
  ): Indice[] => {
    const lResult: Indice[] = response.map(mapFromServerModelIndice) ?? [];
    return lResult;
  };

  export const mapFromServerModelQuestao = (
    item: ServerModels.Questao,
  ): Questao => {
    return {
      id: item.id ?? 'falha',
      texto: item.textoApresentado ?? 'Erro: Falha ao obter texto questão',
      rating: item.pesoAtribuido ?? NaN,
      versao: item.versao,
      textoJustificativa: item.textoJustificativa ?? '',
    };
  };

  export const mapToServerModelReqQuestao = (
    idQuestionario: string,
    item: Questao,
  ): ServerModels.ReqRespostaQuestao => {
    return {
      idQuestionario: idQuestionario,
      id: item.id,
      pesoAtribuido: item.rating ?? 0,
      textoJustificativa: item.textoJustificativa ?? '',
    };
  };

  export const mapToServerModelReqResposta = (
    form: Questionario,
  ): ServerModels.ReqRespostaQuestionario => {
    const id = form.id;

    const lQuestoes: ServerModels.ReqRespostaQuestao[] =
      form.questoes?.map((item) => mapToServerModelReqQuestao(id, item)) ?? [];

    return { id: id, items: lQuestoes };
  };

  export const mapToServerModelReqRespostaParcial = (
    form: Questionario,
    lista: Questao[],
  ): ServerModels.ReqRespostaQuestionario => {
    const idQuestionario = form.id;

    const lQuestoes: ServerModels.ReqRespostaQuestao[] =
      lista?.map((item) => mapToServerModelReqQuestao(idQuestionario, item)) ??
      [];

    return { id: idQuestionario, items: lQuestoes };
  };

  export const mapFromServerModelQuestionario = (
    response: ServerModels.Questionario,
  ): Questionario => {
    const id = response.id ?? 'Erro: Não foi possível obter o ID';
    const fatorCalculado = response.valorIGF;
    const codigoIndice = response.codigoIndice ?? '';
    const versao = response.versao;
    const lQuestoes: Questao[] =
      response.items?.map(mapFromServerModelQuestao) ?? [];

    return {
      id: id,
      ratingCalculado: fatorCalculado,
      codigoIndice: codigoIndice,
      versao: versao,
      questoes: lQuestoes,
    };
  };
}
