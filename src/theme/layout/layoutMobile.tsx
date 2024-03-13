import { AppBar, Wrapper } from "@components";
import { Box } from "@mui/material";
import { Props } from "./@types";

export const LayoutMobile: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar />
      <Wrapper>
        <Box paddingTop={12}>{children}</Box>
      </Wrapper>
    </>
  );
};
