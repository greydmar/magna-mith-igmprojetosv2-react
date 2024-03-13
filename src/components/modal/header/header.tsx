import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Stack, Theme, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  onClose?: () => void;
  label?: string;
  children?: ReactNode | ReactNode[];
};
export const HeaderModal: React.FC<Props> = ({ onClose, label, children }) => {
  const theme = useTheme() as Theme;

  return (
    <>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        borderBottom={`1.5px solid ${theme.palette.grey[300]}`}
        padding={1}
      >
        <Box flexGrow={1}>
          {label && (
            <Typography component={"span"} variant="h5">
              {label}
            </Typography>
          )}
          {children}
        </Box>
        {onClose && (
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        )}
      </Stack>
    </>
  );
};
