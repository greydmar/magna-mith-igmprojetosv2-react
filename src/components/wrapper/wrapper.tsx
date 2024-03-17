import { Stack } from "@mui/material";
import { Props } from "./@types";

export const Wrapper = ({ children }: Props) => {
  return (
    <Stack minHeight={"100%"} width={"100%"} >
      {children}
    </Stack>
  );
};
