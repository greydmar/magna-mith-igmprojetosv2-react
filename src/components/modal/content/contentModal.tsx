import { Grid, Stack } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};
export const ContentModal: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Stack flexGrow={1} sx={{ overflowY: "auto", height: "100%" }}>
        <Grid container spacing={2} padding={2}>
          {children}
        </Grid>
      </Stack>
    </>
  );
};
