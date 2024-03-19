import { useIndice } from "@context/indices";
import { localStorageHandler } from "@helpers/localStorage";
import { useEffect, useState } from "react";
import { useGet } from "simple-queries-react";
import { InciceDotnet, InciceJava, TypeBackend } from "src/types";

const endpoint = {
  JAVA: "indice",
  DOT_NET: "indices",
};

export const useSteper = () => {
  const [steps, setSteps] = useState<InciceJava[]>([]);
  const language: TypeBackend = localStorageHandler("language");
  const { setIdStep } = useIndice();

  const handleSetSteps = (indices: InciceJava[] | []) => {
    if (language === "JAVA") {
      const current = indices as InciceJava[];
      setIdStep(indices[0].id);
      setSteps(
        current.map((item) => ({
          id: item.id,
          descricao: item.descricao,
        }))
      );
    }

    if (language === "DOT_NET") {
      const current = indices as InciceDotnet[];
      setIdStep(current[0].codigoIndice);
      setSteps(
        current.map((item) => ({
          id: item.codigoIndice,
          descricao: item.nomeExibicao,
        }))
      );
    }
  };

  const { send } = useGet({
    apiName: language,
    endpoint: endpoint[language],
    onSuccess: handleSetSteps,
  });

  useEffect(() => {
    if (language) {
      send();
    }
  }, []);

  return { steps };
};
