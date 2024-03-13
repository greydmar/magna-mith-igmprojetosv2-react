import {
  ContentModal,
  FooterButtons,
  HeaderModal,
  Modal,
} from "@components/modal";
import { Box, Typography } from "@mui/material";
type PropsModal = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
export const ModalError: React.FC<PropsModal> = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen} staticEsc>
      <HeaderModal label="Justificativas faltantes" />

      <ContentModal>
        <Box padding={3}>
          <Typography>
            É necessário preencher todas as justificativas com classificação NA
            ou entre 1 e 4 estrelas.
          </Typography>
        </Box>
      </ContentModal>

      <FooterButtons onClose={() => setOpen(false)} />
    </Modal>
  );
};
