import ErrorOutline from "@mui/icons-material/ErrorOutline";
import { Box, Stack, Typography } from "@mui/material";

export const Error404 = () => {
  return (
    <Stack
      alignItems={"center"}
      flexGrow={1}
      paddingTop={4}
    >
      <ErrorOutline sx={{ fontSize: 200, color: "#FFDB58" }} />
      <Typography variant="h4">Página não encontrada.</Typography>
      <Box width={{ md: "50%" }}>
        <Typography variant="body1" textAlign="center" marginTop={2}>
          A página que você está procurando não pôde ser encontrada.
          <br />
          Verifique o URL digitado ou entre em contato com o administrador
          <br />
          do sistema se você acredita que isto é um erro.
        </Typography>
      </Box>
    </Stack>
  );
};
