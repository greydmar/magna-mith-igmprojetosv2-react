import { Stack, useMediaQuery } from "@mui/system";
import { Justification } from "./justification";
import { Question } from "./question";
import { PropsQuestionRow } from "./@types";

export const QuestionRow: React.FC<PropsQuestionRow> = ({question, index}) => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  
  return (
    <>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        gap={isSmallScreen ? 0 : 2.5}
        flexWrap={"nowrap"}
      >
        <Question question={question} index={index}/>
        <Justification question={question} index={index}/>
      </Stack>
    </>
  );
};
