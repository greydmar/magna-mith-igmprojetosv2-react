import { Box, Typography } from "@mui/material";
import { Stack, useMediaQuery } from "@mui/system";
import { PropsQuestionTable } from "./@types";
import { QuestionRow } from "./questionRow";
import { useFormContext } from "react-hook-form";
import { FormQuestion } from "src/types";

export const Questiontable: React.FC<PropsQuestionTable> = ({ children }) => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const { watch } = useFormContext<{ form: FormQuestion }>();
  const questions = watch("form.questions");

  return (
    <>
      <Stack gap={1.5}>
        <Stack
          direction={"row"}
          gap={2.5}
          flexWrap={"nowrap"}
          paddingBottom={1}
        >
          <Box flexGrow={1}>{children}</Box>
          {!isSmallScreen ? (
            <Box width={"30%"}>
              <Typography fontWeight={"bold"}>Justificativa</Typography>
            </Box>
          ) : null}
        </Stack>
        {questions?.map((question, index) => (
          <QuestionRow
            question={question}
            index={index}
            key={`question-row-${question.itemId}`}
          />
        ))}
      </Stack>
    </>
  );
};
