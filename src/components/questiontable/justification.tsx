import { CellIndicator } from "@components/cellIndicator/cellIndicator";
import { Box, InputBase, Typography } from "@mui/material";
import { Stack, useMediaQuery } from "@mui/system";
import { useState } from "react";
import { QuestionCell } from "./questionCell";
import { useThemeMode } from "@store/useThemeMode";
import { colors } from "@theme/colors";
import { PropsJustification } from "./@types";
import { Questionario } from "src/types";
import { useFormContext } from "react-hook-form";

export const Justification: React.FC<PropsJustification> = ({ question, index }) => {
  const { setValue, watch } = useFormContext<{ form: Questionario }>();
  const [selected, setSelected] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const { themeMode } = useThemeMode();
  const isDark = themeMode == "dark";
  const colorDisable = isDark ? "#505050" : "#c3c3c3"
  const isDisableJustify = !question?.rating || question?.rating < 5

  const handleSetValue = (value: string) => {
    setValue(`form.questoes.${index}.textoJustificativa`, value);
  };

  const toggleSelected = () => {
    setSelected((prev) => !prev);
  };

  return (
    <>
      <QuestionCell width={isSmallScreen ? undefined : "30%"}>
        <Stack
          flexDirection={"row"}
          height={"100%"}
          alignItems={"center"}
          position={"relative"}
          width={"100%"}

          bgcolor={
            question?.rating && question?.rating == 5
              ? colorDisable
              : isDark
                ? colors?.darkMode?.light
                : undefined
          }
        >
          <Stack margin={1} width={"100%"}>
            {selected ? (
              <InputBase
                size="small"
                autoFocus
                fullWidth
                placeholder="Indicar Justificativa"
                onBlur={toggleSelected}
                sx={{ marginLeft: 2 }}
                value={watch(`form.questoes.${index}.textoJustificativa`) ?? ""}
                onChange={(e) => {
                  handleSetValue(e.target.value);
                }}
              />
            ) : (
              <Box
                paddingLeft={2}
                onClick={() => {
                  isDisableJustify && toggleSelected();
                }}
                sx={{
                  cursor:
                    isDisableJustify
                      ? "pointer"
                      : undefined,
                }}
                width={"90%"}
              >
                <Typography
                  component={"span"}
                  fontStyle={"italic"}
                  fontWeight={"100"}
                  width={"90%"}
                >
                  {question?.rating === 5
                    ? "Não é necessário indicar justificativa"
                    : question?.textoJustificativa?.trim()
                      ? question?.textoJustificativa
                      : "Indicar Justificativa"}
                </Typography>
              </Box>
            )}
          </Stack>
          {!selected && !isSmallScreen && <CellIndicator />}
        </Stack>
      </QuestionCell>
    </>
  );
};
