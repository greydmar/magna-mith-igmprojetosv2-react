import { Button, Stack, Theme, useTheme } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  onClose?: () => void;
  children?: ReactNode | ReactNode[];
  align?: "";
};

export const FooterButtons: React.FC<Props> = ({ onClose, children }) => {
  const theme = useTheme() as Theme;

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        gap={1}
        borderTop={`1.5px solid ${theme.palette.grey[300]}`}
        padding={2}
      >
        {children}
        {onClose && (
          <Button variant="outlined" onClick={onClose} color="inherit">
            Fechar
          </Button>
        )}
      </Stack>
    </>
  );
};
