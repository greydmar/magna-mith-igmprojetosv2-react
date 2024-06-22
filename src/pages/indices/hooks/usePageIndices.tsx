import { useState } from 'react';
import { PropsUsePageIndices } from '../@types';
import { useSetupListarIndices } from '@hooks/useSetupListarIndices';
import { useSetupNovoQuestionario } from '@hooks/useSetupNovoQuestionario';
import { useSetupFinalizarQuestionario } from '@hooks/useSetupFinalizarQuestionario';

export const usePageIndices = ({ methods }: PropsUsePageIndices) => {
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openError, setOpenError] = useState(false);

  /* setup */
  const opListarIndices = useSetupListarIndices({ methods, setOpenLanguage });
  useSetupNovoQuestionario();
  const opFinalizarQuestionario = useSetupFinalizarQuestionario({
    setOpenError,
  });

  return {
    openLanguage,
    setOpenLanguage,
    openError,
    setOpenError,
    handleOnSubmit: opFinalizarQuestionario.handleOnSubmit,
    success: opFinalizarQuestionario.success,
    isLoading: opFinalizarQuestionario.isLoading,
    isLoadingIndices: opListarIndices.isLoading,
  };
};
