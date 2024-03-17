import { Card, Paper, Stack, useMediaQuery } from "@mui/material";
import { colors } from "@theme/colors";
import { PropsCardLanguage } from "./@types";

export const CardLanguage: React.FC<PropsCardLanguage> = ({
  value,
  logo,
  handleLanguage,
  language,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const isSelected = language === value;

  return (
    <>
      <Card
        sx={{
          height: isSmallScreen ? 300 : 500,
          width: 300,
          backgroundColor: isSelected ? colors?.primary?.main : undefined,
          "&:hover": { bgcolor: colors.primary.light },
          cursor: "pointer",
        }}
        component={Paper}
        onClick={() => handleLanguage(value)}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          padding={4}
          height={"100%"}
        >
          <img src={logo} style={{maxHeight: "80%", maxWidth: "80%"}}/>
        </Stack>
      </Card>
    </>
  );
};
