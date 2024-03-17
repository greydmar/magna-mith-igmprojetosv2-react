import { CellIndicator } from "@components/cellIndicator/cellIndicator";
import { Rating } from "@components/rating/rating";
import { Box, Typography } from "@mui/material";
import { Stack, useMediaQuery } from "@mui/system";
import { useThemeMode } from "@store/useThemeMode";
import { colors } from "@theme/colors";
import { PropsQuestion } from "./@types";
import { QuestionCell } from "./questionCell";
import { useFormContext } from "react-hook-form";
import { FormQuestion } from "src/types";

export const Question: React.FC<PropsQuestion> = ({ question, index }) => {
  const { setValue } = useFormContext<{ form: FormQuestion }>();
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const { themeMode } = useThemeMode();
  const isDark = themeMode == "dark";

  const handleSetValue = (value: number) => {
    setValue(`form.questions.${index}.rating` , value);
  };

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
                <Rating setFormValue={handleSetValue} rating={question?.rating} />
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
