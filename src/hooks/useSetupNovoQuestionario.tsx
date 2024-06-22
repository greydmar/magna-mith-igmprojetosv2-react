import { useIndice } from '@context/indices';
import { localStorageHandler } from '@helpers/localStorage';
import { TypeBackend } from '@models';
import { EndpointsMap, Mapeamentos, ServerModels } from '@remoteApi';
import { useEffect } from 'react';
import { usePost } from 'simple-queries-react';

export const useSetupNovoQuestionario = () => {
  const lang: TypeBackend = localStorageHandler('language');
  const ctx = useIndice();

  const reqInfo = usePost<ServerModels.Questionario>({
    apiName: lang,
    endpoint: EndpointsMap[lang]?.novoQuestionario,
  });

  /* condição monitorada para envio requisição */
  useEffect(() => {
    if (ctx.objIndice?.id == '') return;

    reqInfo.send({
      body: ctx.objIndice?.id,
    });
  }, [ctx.objIndice]);

  /* tratamento de resposta: sucesso */
  useEffect(() => {
    const response = reqInfo.getResponse();

    if (!response) {
      return;
    }
    const result = Mapeamentos.mapFromServerModelQuestionario(response);

    ctx.handleLoadList([result]);
  }, [reqInfo.getResponse()]);

  return reqInfo;
};
