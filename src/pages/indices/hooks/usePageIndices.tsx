import { useIndice } from "@context/indices";
import { localStorageHandler } from "@helpers/localStorage";
import { loadForm } from "@libs/loadForm";
import { useEffect, useState } from "react";
import { useGet, usePost } from "simple-queries-react";
import { FormQuestion, Question } from "src/types";
import { PropsUsePageIndices } from "../@types";
import { handleValidFormQuestion } from "../helpers/handleValidFormQuestion";

export const usePageIndices = ({ methods }: PropsUsePageIndices) => {
  const [openLanguage, setOpenLanguage] = useState(false);
  const { listQuestion, handleLoadList, idStep } = useIndice();
  const language = localStorageHandler("language");

  const { send, getResponse } = useGet<{ id: string; descricao: string }[]>({
    apiName: language,
    endpoint: `questao`,
  });
  const [openError, setOpenError] = useState(false);
  const [load, setLoad] = useState<boolean>(true);

  const { send: sendPost, success, isLoading } = usePost({
    apiName: language,
    endpoint: "formulario-resposta",
  });

  const { send: sendCalcular, getResponse: responseCalcular } = usePost({
    apiName: language,
    endpoint: "formulario-resposta/calcular/igf",
  });

  const handleOnSubmit = async (data: any) => {
    const form = await handleValidFormQuestion(data.form);

    if (!form.isValid) {
      setOpenError(true);
      return;
    }

    sendPost({
      indiceId: idStep,
      respostas: form?.form?.questions?.map((item) => ({
        id: item?.itemId,
        numeroAvaliacao: item?.rating ?? 0,
        justificativa: item?.justify,
      })),
    });
  };

  const handleCalcular = (data: FormQuestion) => {
    sendCalcular(
      data?.questions?.map((item) => ({
        id: item?.itemId,
        descricao: item?.rating,
      }))
    );
  };

  useEffect(() => {
    if (getResponse()) {
      const dataQuestion: Question[] =
        getResponse()?.map((item: { id: string; descricao: string }) => ({
          itemId: item.id,
          text: item.descricao,
        })) ?? [];

      handleLoadList([{ idForm: idStep, questions: dataQuestion }]);
    }
  }, [getResponse()]);

  useEffect(() => {
    if (!listQuestion?.length && idStep) {
      send({
        pathRest: {
          indice: idStep,
        },
      });
    }

    if (!language) {
      setOpenLanguage(true);
    }
  }, [idStep]);

  useEffect(() => {
    if (listQuestion?.length && load) {
      setLoad(false);
      methods?.setValue("form", loadForm(listQuestion[0]));
    }
  }, [listQuestion]);

  return {
    openLanguage,
    setOpenLanguage,
    openError,
    setOpenError,
    handleOnSubmit,
    handleCalcular,
    calculo: (responseCalcular() as number) ?? 0,
    success, 
    isLoading
  };
};
