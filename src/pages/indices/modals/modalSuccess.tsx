import { ContentModal, FooterButtons, Modal } from '@components/modal';
import { Indice } from '@models';
import { Box, Button, Typography } from '@mui/material';

type PropsModal = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  indice: Indice;
};

export const ModalSuccess: React.FC<PropsModal> = ({
  open,
  setOpen,
  indice,
}) => {
  return (
    <Modal open={open} setOpen={setOpen} staticEsc>
      <ContentModal>
        <Box padding={3}>
          <Typography>
            Checklist do sub-indice {indice.descricao} enviado com sucesso.
          </Typography>
        </Box>
      </ContentModal>

      <FooterButtons>
        <Button
          type="submit"
          variant="contained"
          onClick={() => setOpen(false)}
        >
          <Typography color={'primary.contrastText'}>OK</Typography>
        </Button>
      </FooterButtons>
    </Modal>
  );
};
