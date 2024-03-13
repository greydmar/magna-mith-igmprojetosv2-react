import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const themeLight = (fontSize: number = 12) => {
  return createTheme({
    palette: {
      mode: "light",
      primary: {
        main: colors.primary.main,
        light: colors.primary.light,
        dark: colors.primary.dark,
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
            color: "#606060",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: "#606060",
            fontWeight: "bold",
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            color: "#606060",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#606060",
          },
        },
      },
    },
  });
};
