import { localStorageHandler } from '@helpers/localStorage';
import { Questao, Questionario, TypeBackend } from '@models';
import { EndpointsMap, Mapeamentos, ServerModels } from '@remoteApi';
import { useEffect } from 'react';
import { usePatch } from 'simple-queries-react';

export const useSetupOpCalculoFator = () => {
  const lang: TypeBackend = localStorageHandler('language');

  const reqInfo = usePatch<ServerModels.Questionario>({
    apiName: lang,
    endpoint: EndpointsMap[lang].calculoIGF,
  });

  let handleReqInfoResponse: (resposta: Questionario) => void = () => {};

  const enviarRecalculo = (form: Questionario, questao: Questao) => {
    const lQuestoes = form.questoes?.filter((item) => item.id == questao.id);

    const reqResposta = Mapeamentos.mapToServerModelReqRespostaParcial(
      form,
      lQuestoes,
    );

    if (reqResposta.items?.length == 0) return;

    reqInfo.send(reqResposta);
  };

  // tratamento de resposta: sucesso
  useEffect(() => {
    const response = reqInfo.getResponse();

    if (response == null) return;

    const questionario = Mapeamentos.mapFromServerModelQuestionario(response);

    if (!handleReqInfoResponse) return;

    handleReqInfoResponse(questionario);
  }, [reqInfo.getResponse()]);

  return {
    enviarRecalculo: enviarRecalculo,
    processarRespostaRecalculo: (fn: (resposta: Questionario) => void) => {
      handleReqInfoResponse = fn;
    },
  };
};
