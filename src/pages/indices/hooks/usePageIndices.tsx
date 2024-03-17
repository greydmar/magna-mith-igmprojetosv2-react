import { useIndice } from "@context/indices";
import { localStorageHandler } from "@helpers/localStorage";
import { loadForm } from "@libs/loadForm";
import { useEffect, useState } from "react";
import { useGet } from "simple-queries-react";
import { handleValidFormQuestion } from "../helpers/handleValidFormQuestion";
import { PropsUsePageIndices } from "../@types";

export const usePageIndices = ({ methods }: PropsUsePageIndices) => {
  const [openLanguage, setOpenLanguage] = useState(false);
  const { listQuestion, handleLoadList } = useIndice();

  const { send, getResponse } = useGet("/mock/listQuestoes.json");
  const [openError, setOpenError] = useState(false);
  const [load, setLoad] = useState<boolean>(true);

  const handleOnSubmit = async (data: any) => {
    const form = await handleValidFormQuestion(data.form);

    if (!form.isValid) {
      setOpenError(true);
      return;
    }
    console.log("enviar form", form);
  };

  useEffect(() => {
    if (getResponse()) {
      handleLoadList(getResponse() as any);
    }
  }, [getResponse()]);

  useEffect(() => {
    if (!listQuestion?.length) {
      send();
    }

    if (!localStorageHandler("language")) {
      setOpenLanguage(true);
    }
  }, []);

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
  };
};
