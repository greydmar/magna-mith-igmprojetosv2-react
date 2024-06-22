import { useIndice } from '@context/indices';
import { localStorageHandler } from '@helpers/localStorage';
import { loadForm } from '@libs/loadForm';
import { Questionario, TypeBackend } from '@models';
import { EndpointsMap, Mapeamentos, ServerModels } from '@remoteApi';
import { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useGet } from 'simple-queries-react';

type UseSetupListarIndicesProps = {
  methods: UseFormReturn<{ form: Questionario }, any, undefined>;
  setOpenLanguage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useSetupListarIndices = ({
  methods,
  setOpenLanguage,
}: UseSetupListarIndicesProps) => {
  const lang: TypeBackend = localStorageHandler('language');
  const [load, setLoad] = useState<boolean>(true);
  const ctx = useIndice();

  const reqInfo = useGet<ServerModels.Indice[]>({
    apiName: lang,
    endpoint: EndpointsMap[lang]?.listaIndices,
  });

  /* condição monitorada para envio requisição */
  useEffect(() => {
    if (!ctx.lQuestionarios?.length && ctx.idStep == '') {
      reqInfo.send();
    }

    if (!lang) {
      setOpenLanguage(true);
    }
  }, [ctx.idStep]);

  /* Substitui o questionário apresentado na tela */
  useEffect(() => {
    if (ctx.lQuestionarios?.length && load) {
      setLoad(false);
      methods?.setValue('form', loadForm(ctx.lQuestionarios[0]));
    }
  }, [ctx.lQuestionarios]);

  /* tratamento de resposta: sucesso */
  useEffect(() => {
    const response = reqInfo.getResponse();
    if (!response || !Array.isArray(response)) {
      return;
    }
    const result = Mapeamentos.mapFromServerModelIndices(response);

    ctx.setObjIndice(result[0]);
  }, [reqInfo.getResponse()]);

  return reqInfo;
};
