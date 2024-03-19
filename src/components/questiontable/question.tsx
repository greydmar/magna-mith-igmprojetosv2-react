import { CellIndicator } from "@components/cellIndicator/cellIndicator";
import { Rating } from "@components/rating/rating";
import { Box, Typography } from "@mui/material";
import { Stack, useMediaQuery } from "@mui/system";
import { useThemeMode } from "@store/useThemeMode";
import { colors } from "@theme/colors";
import { useFormContext } from "react-hook-form";
import { usePost } from "simple-queries-react";
import { FormQuestion } from "src/types";
import { PropsQuestion } from "./@types";
import { QuestionCell } from "./questionCell";
import { useEffect } from "react";
import { useIndice } from "@context/indices";

export const Question: React.FC<PropsQuestion> = ({ question, index }) => {
  const { setValue } = useFormContext<{ form: FormQuestion }>();
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const { themeMode } = useThemeMode();
  const isDark = themeMode == "dark";
  const {setIndice} = useIndice();
  const { watch } = useFormContext<{ form: FormQuestion }>();
  const questions = watch("form.questions");

  const { send, getResponse } = usePost<number>({
    apiName: "JAVA",
    endpoint: "formulario-resposta/calcular/igf",
  });

  const handleSetValue = (value: number) => {
    setValue(`form.questions.${index}.rating`, value);

    const listQuestion =  questions?.map((item) => ({
      id: item?.itemId,
      numeroAvaliacao: questions[index].itemId == item?.itemId ? (value ?? 0) :  (item?.rating ?? 0),
    }));
    send(
      [...listQuestion ]
    );
  };

  useEffect(() => {
    const indice = getResponse();
    if(indice){
      setIndice(indice)
    }
  }, [getResponse()])

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
