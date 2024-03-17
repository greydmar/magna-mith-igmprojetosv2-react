import {
  ContentModal,
  FooterButtons,
  HeaderModal,
  Modal,
} from "@components/modal";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
type PropsModal = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
export const ModalLanguage: React.FC<PropsModal> = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <Modal open={open} setOpen={setOpen} staticEsc>
      <HeaderModal label="Nenhuma linguagem selecionada" />

      <ContentModal>
        <Box padding={3}>
          <Typography>
            É necessário definir a linguagem para utilizar o sistema.
          </Typography>
        </Box>
      </ContentModal>

      <FooterButtons>
        <Button type="submit" variant="contained" onClick={() => navigate("/")}>
          <Typography color={"primary.contrastText"}>Ir para seleção</Typography>
        </Button>
      </FooterButtons>
    </Modal>
  );
};
