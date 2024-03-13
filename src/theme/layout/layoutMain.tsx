import { ConfigBar, SideBar } from "@components/menu";
import { Wrapper } from "@components/wrapper";
import { Box, Paper, Stack } from "@mui/material";
import { Props } from "./@types";

export const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Stack
        component={Paper}
        direction={"row"}
        elevation={0}
        sx={{ minHeight: "100vh" }}
      >
        <SideBar />
        <Box flexGrow={1} sx={{zIndex: 100}}>
          <Wrapper>
            <>
              <ConfigBar />
              {children}
            </>
          </Wrapper>
        </Box>
      </Stack>
    </>
  );
};
