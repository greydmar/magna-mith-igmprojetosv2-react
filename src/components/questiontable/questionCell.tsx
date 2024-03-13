import { Card, useMediaQuery } from "@mui/material";
import { PropsQuestionCell } from "./@types";
import { stylesCard } from "./styles";

export const QuestionCell: React.FC<PropsQuestionCell> = ({
  children,
  width,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const widthCell = width ? { width: width } : { flexGrow: 1 };

  return (
    <>
      <Card
        sx={{
          ...stylesCard,
          ...widthCell,
          ...{ borderRadius: isSmallScreen ? 0 : 0.5 },
        }}
        elevation={isSmallScreen ? 0 : 2}
      >
        {children}
      </Card>
    </>
  );
};
