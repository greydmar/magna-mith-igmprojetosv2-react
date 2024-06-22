import { useIndice } from '@context/indices';
import { localStorageHandler } from '@helpers/localStorage';
import { TypeBackend } from '@models';
import { handleValidateQuestionario } from '@pages/indices/helpers/handleValidateQuestionario';
import { EndpointsMap, Mapeamentos, ServerModels } from '@remoteApi';
import { useEffect, useState } from 'react';
import { usePut } from 'simple-queries-react';

export const useSetupFinalizarQuestionario = () => {
  const lang: TypeBackend = localStorageHandler('language');
  const [, setOpenError] = useState(false);
  const ctx = useIndice();

  const reqInfo = usePut<ServerModels.Questionario>({
    apiName: lang,
    endpoint: EndpointsMap[lang].finalizado,
  });

  /* condição monitorada para envio requisição */
  const handleOnSubmit = async (data: any) => {
    const form = await handleValidateQuestionario(data.form);

    if (!form.isValid) {
      setOpenError(true);
      return;
    }

    reqInfo.send(Mapeamentos.mapToServerModelReqResposta(data.form));
  };

  /* tratamento de resposta: sucesso */
  useEffect(() => {
    const response = reqInfo.getResponse();

    if (!response) {
      return;
    }
    const result = Mapeamentos.mapFromServerModelQuestionario(response);

    ctx.handleLoadList([result]);
  }, [reqInfo.getResponse()]);

  return { handleOnSubmit, ...reqInfo };
};
