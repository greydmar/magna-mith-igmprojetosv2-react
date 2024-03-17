import { Box, Paper, Typography, useTheme } from "@mui/material";
import { styles, stylesContent, stylesInternalBar } from "./styles";
import { PropsProgressBar } from "./@types";
import { useThemeMode } from "@store/useThemeMode";
import { colors } from "@theme/colors";
import { formatNumber } from "@libs/formatNumber";

export const ProgressBar: React.FC<PropsProgressBar> = ({
  label,
  value = 20,
}) => {
  const { themeMode } = useThemeMode();
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          ...styles,
          backgroundColor:
            themeMode == "dark"
              ? theme.palette.primary.light
              : colors.customBlue.light,
          boxShadow: `inset 1px 3px 12px 0px  ${
            themeMode == "dark"
              ? theme.palette.primary.dark
              : theme.palette.primary.main
          }`,
        }}
      >
        <Typography
          component="span"
          sx={{
            ...stylesContent,
            textShadow: `0px 0px 3px ${
              themeMode == "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.main
            }`,
          }}
        >
          {`${label} ${formatNumber(value)}%`}
        </Typography>
        <Box
          sx={{
            ...stylesInternalBar,
            backgroundColor:
              themeMode == "dark" ? "primary.main" : "primary.main",
          }}
          width={`${value}%`}
          component={Paper}
          elevation={5}
        ></Box>
      </Box>
    </>
  );
};
