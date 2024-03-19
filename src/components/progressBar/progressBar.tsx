import { formatNumber } from "@libs/formatNumber";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { useThemeMode } from "@store/useThemeMode";
import { colors } from "@theme/colors";
import { PropsProgressBar } from "./@types";
import { styles, stylesContent, stylesInternalBar } from "./styles";

export const ProgressBar: React.FC<PropsProgressBar> = ({
  label,
  value= 0
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
