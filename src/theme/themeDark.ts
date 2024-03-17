import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const themeDark = (fontSize: number = 12) => {
  return createTheme({
    palette: {
      mode: "dark",

      background: {
        paper: colors.darkMode.dark,
      },
      primary: {
        main: colors.darkMode.main,
        light: colors.darkMode.light,
        dark: colors.darkMode.dark,
        contrastText: colors.primary.contrastText,
      },
      secondary: {
        main: colors.secondary.main,
        light: colors.secondary.light,
        dark: colors.secondary.dark,
        contrastText: colors.secondary.contrastText,
      },
    },
    typography: {
      fontSize: fontSize,
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "Roboto",
            color: colors.primary.contrastText,
          },
        },
      },
    }
  });
};
