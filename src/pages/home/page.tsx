import LogoDotNet from "@assets/dotnet-logo.png";
import LogoJava from "@assets/java-logo.png";
import { CardLanguage } from "@components/cardLanguage/cardLanguage";
import { localStorageHandler } from "@helpers/localStorage";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const PageHome = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const [language, setLanguage] = useState<"JAVA" | "DOT_NET" | null>(null);
  const navigate = useNavigate();

  const handleLanguage = (value: "JAVA" | "DOT_NET" | null) => {
    if (language === value) {
      localStorageHandler("language", null);
      setLanguage(null);
      return;
    }
    setLanguage(value);
    localStorageHandler("language", value);
  };

  useEffect(() => {
    setLanguage(localStorageHandler("language", null));
  }, []);

  return (
    <>
      <Box padding={2} textAlign={"center"}>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          marginBottom={1}
          textAlign={"center"}
        >
          Escolha abaixo qual linguagem deseja utilizar como{" "}
          <Typography
            variant="h5"
            fontWeight={"bold"}
            component={"span"}
            color={"primary.main"}
          >
            Backend
          </Typography>{" "}
          desta aplicação.
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"} marginY={3}>
          Após a seleção da linguagem, a aplicação consumirá os endpoints
          desenvolvidos com base nessa arquitetura.
        </Typography>
        <Button
          variant="contained"
          size="large"
          fullWidth={isSmallScreen}
          onClick={() => {
            navigate("/indices");
          }}
          disabled={!language}
        >
          <Typography color={"primary.contrastText"}>Ir para Índice</Typography>
        </Button>
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          marginY={6}
          gap={2}
        >
          <CardLanguage
            value="JAVA"
            logo={LogoJava}
            handleLanguage={handleLanguage}
            language={language}
          />
          <CardLanguage
            value="DOT_NET"
            logo={LogoDotNet}
            handleLanguage={handleLanguage}
            language={language}
          />
        </Stack>
      </Box>
    </>
  );
};
