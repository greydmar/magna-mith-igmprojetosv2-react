import { Paper, useTheme } from "@mui/material";
import Fade from "@mui/material/Fade";
import ModalMui from "@mui/material/Modal";
import { Box } from "@mui/system";
import React from "react";

type Props = {
  staticEsc?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  open: boolean;
  setOpen: (value: boolean) => void;
  children: React.ReactNode | React.ReactNode[];
};

export const Modal: React.FC<Props> = ({
  staticEsc = false,
  size = "sm",
  open,
  setOpen,
  children,
}) => {
  const theme = useTheme();
  const sizeModal = { ...theme.breakpoints.values, ...{ xs: 300 } };

  return (
    <>
      <ModalMui
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={staticEsc ? undefined : () => setOpen(false)}
        closeAfterTransition
        disableEscapeKeyDown
        disablePortal
      >
        <Fade in={open}>
          <Paper
            sx={{
              position: "absolute" as const,
              width: sizeModal?.[size],
              maxWidth: "96%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Box
              sx={{
                height: "auto",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {children}
            </Box>
          </Paper>
        </Fade>
      </ModalMui>
    </>
  );
};
