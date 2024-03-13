import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Box, Stack, Typography } from "@mui/material";

export const Error401 = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      flexGrow={1}
      paddingTop={4}
    >
      <WarningAmberIcon sx={{ fontSize: 200, color: "#FFDB58" }} />
      <Typography variant="h4">Acesso negado.</Typography>
      <Box width={{ md: "50%" }}>
        <Typography variant="body1" textAlign="center" marginTop={2}>
          Você não tem permissão para carregar a funcionalidade
          <br />
          solicitada. Caso necessite de acesso, entre em
          <br />
          contato com o administrador.
        </Typography>
      </Box>
    </Stack>
  );
};
