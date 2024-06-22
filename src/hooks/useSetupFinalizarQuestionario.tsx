import { useIndice } from '@context/indices';
import { localStorageHandler } from '@helpers/localStorage';
import { TypeBackend } from '@models';
import { handleValidateQuestionario } from '@pages/indices/helpers/handleValidateQuestionario';
import { EndpointsMap, Mapeamentos, ServerModels } from '@remoteApi';
import { useEffect } from 'react';
import { usePut } from 'simple-queries-react';

type SetupFinalizarQuestionarioProps = {
  setOpenError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useSetupFinalizarQuestionario = ({
  setOpenError,
}: SetupFinalizarQuestionarioProps) => {
  const lang: TypeBackend = localStorageHandler('language');
  const ctx = useIndice();

  const reqInfo = usePut<ServerModels.Questionario>({
    apiName: lang,
    endpoint: EndpointsMap[lang]?.finalizado,
  });

  /* condição monitorada para envio requisição */
  const handleOnSubmit = async (data: any) => {
    const form = await handleValidateQuestionario(data.form);

    if (!form.isValid) {
      console.log('aqui');
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
