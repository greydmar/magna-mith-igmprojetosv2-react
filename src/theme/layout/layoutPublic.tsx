import { Wrapper } from "@components/wrapper";
import { Box } from "@mui/material";
import { Props } from "./@types";

export const LayoutPublic: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Box>{children}</Box>
      </Wrapper>
    </>
  );
};
