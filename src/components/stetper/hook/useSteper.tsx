import { useIndice } from "@context/indices";
import { localStorageHandler } from "@helpers/localStorage";
import { useEffect, useState } from "react";
import { useGet } from "simple-queries-react";
import { InciceJava } from "src/types";

export const useSteper = () => {
  const [steps, setSteps] = useState<InciceJava[]>([]);
  const language = localStorageHandler("language");
  const { setIdStep } = useIndice();

  const handleSetSteps = (indices: InciceJava[]) => {
    setIdStep(indices[0].id);
    setSteps(indices);
  };

  const { send } = useGet({
    apiName: language,
    endpoint: "indice",
    onSuccess: handleSetSteps,
  });

  useEffect(() => {
    if (language) {
      send();
    }
  }, []);

  return { steps };
};
