import { useEffect, useState } from 'react';
import { useGet } from 'simple-queries-react';
import { localStorageHandler } from '@helpers/localStorage';
import { Indice, TypeBackend } from 'src/types';
import { useIndice } from '@context/indices';
import { EndpointsMap } from '../../../services/remoteApi/endpointsMap.ts';

export const useSteper = () => {
  const [steps, setSteps] = useState<Indice[]>([]);
  const language: TypeBackend = localStorageHandler('language');
  const { setIdStep } = useIndice();

  const handleSetSteps = (indices: Indice[] | []) => {
    const current = indices as Indice[];
    setIdStep(indices[3].codigoIndice);
    setSteps(
      current.map((item) => ({
        id: item.id,
        codigoIndice: item.codigoIndice,
        descricao: item.descricao,
      })),
    );
  };

  const { send } = useGet({
    apiName: language,
    endpoint: EndpointsMap[language]?.listaIndices,
    onSuccess: handleSetSteps,
  });

  useEffect(() => {
    if (language) {
      send();
    }
  }, []);

  return { steps };
};
