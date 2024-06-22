import {
  ContentModal,
  FooterButtons,
  HeaderModal,
  Modal,
} from '@components/modal';
import { Box, Typography } from '@mui/material';
type PropsModal = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
export const ModalError: React.FC<PropsModal> = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen} staticEsc>
      <HeaderModal label="Justificativas pendentes" />

      <ContentModal>
        <Box padding={3}>
          <Typography>
            Existem justificativas pendentes, por favor verifique para
            prosseguir.
          </Typography>
        </Box>
      </ContentModal>

      <FooterButtons onClose={() => setOpen(false)} />
    </Modal>
  );
};
