import { Interpolation, Theme } from "@mui/material";
import { useThemeMode } from "@store/useThemeMode";
import { colors } from "@theme/colors";
import { useEffect, useState } from "react";

export const useGlobalStyles = () => {
  const { themeMode } = useThemeMode();
  const [globalStyles, setGlobalStyles] = useState<Interpolation<Theme>>({});

  useEffect(() => {
    const scrollbar = {
      "::-webkit-scrollbar": {
        width: "12px",
        height: "12px",
        backgroundColor:
          themeMode == "dark" ? colors?.darkMode?.dark : "#e9e9e9",
      },

      "::-webkit-scrollbar-thumb": {
        backgroundColor: colors.primary.main,
        borderRadius: "30px",
        border: `1px solid ${colors.primary.main}`,
      },
      
    };

    setGlobalStyles({
      body: {
        ...scrollbar,
        backgroundColor:
          themeMode == "dark" ? colors?.darkMode?.dark : "#e9e9e9",
      },
      ...scrollbar,
    });
  }, [themeMode]);

  return { globalStyles };
};
