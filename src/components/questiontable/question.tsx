import { CellIndicator } from "@components/cellIndicator/cellIndicator";
import { Rating } from "@components/rating/rating";
import { Box, Typography } from "@mui/material";
import { Stack, useMediaQuery } from "@mui/system";
import { useThemeMode } from "@store/useThemeMode";
import { colors } from "@theme/colors";
import { useFormContext } from "react-hook-form";
import { usePost } from "simple-queries-react";
import { FormQuestion, TypeBackend } from "src/types";
import { PropsQuestion } from "./@types";
import { QuestionCell } from "./questionCell";
import { useEffect } from "react";
import { useIndice } from "@context/indices";
import { localStorageHandler } from "@helpers/localStorage";

const endpoint = {
  JAVA: "formulario-resposta/calcular/igf",
  DOT_NET: "calculoAvaliacao",
};

export const Question: React.FC<PropsQuestion> = ({ question, index }) => {
  const { setValue } = useFormContext<{ form: FormQuestion }>();
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const { themeMode } = useThemeMode();
  const isDark = themeMode == "dark";
  const { setIndice, idStep } = useIndice();
  const { watch } = useFormContext<{ form: FormQuestion }>();
  const questions = watch("form.questions");
  const language: TypeBackend = localStorageHandler("language");

  const { send, getResponse } = usePost<any>({
    apiName: language,
    endpoint: endpoint[language],
  });

  const handleSetValue = (value: number) => {
    setValue(`form.questions.${index}.rating`, value);

    if (language == "JAVA") {
      const listQuestion = questions?.map((item) => ({
        questaoId: item?.itemId,
        numeroAvaliacao:
          questions[index].itemId == item?.itemId
            ? value ?? 0
            : item?.rating ?? 0,
      }));
      send([...listQuestion]);
    }

    if (language == "DOT_NET") {
      const listQuestion = questions?.map((item) => ({
        codigoItem: item?.itemId,
        pesoAtribuido:
          questions[index].itemId == item?.itemId
            ? value ?? 0
            : item?.rating ?? 0,
      }));
      send({
        codigoIndice: idStep,
        situacao: 2,
        items: [...listQuestion],
      });
    }
  };

  useEffect(() => {
    const indice = getResponse();
    if (indice) {
      if (language == "JAVA") {

        setIndice(indice);
      }
      if (language == "DOT_NET") {

        setIndice(indice?.indiceCalculado);
      }
    }
  }, [getResponse()]);

  return (
    <>
      <QuestionCell width={isSmallScreen ? undefined : "70%"}>
        <Box
          bgcolor={isDark ? colors?.darkMode?.light : undefined}
          height={"100%"}
        >
          <Stack
            direction={isSmallScreen ? "column-reverse" : "row"}
            height={"100%"}
            gap={4}
            alignItems={"center"}
            paddingLeft={2}
            padding={isSmallScreen ? 3 : 0}
            marginX={isSmallScreen ? 0 : 3}
          >
            <Box
              bgcolor={
                isSmallScreen
                  ? undefined
                  : isDark
                  ? "inherit"
                  : colors.customBlue.light
              }
              sx={{ position: "relative" }}
            >
              {!isSmallScreen && <CellIndicator />}
              <Box paddingY={0.3} paddingX={1.5}>
                <Rating
                  setFormValue={handleSetValue}
                  rating={question?.rating}
                />
              </Box>
            </Box>
            <Box>
              <Typography component={"span"}>{question?.text}</Typography>
            </Box>
          </Stack>
        </Box>
      </QuestionCell>
    </>
  );
};
