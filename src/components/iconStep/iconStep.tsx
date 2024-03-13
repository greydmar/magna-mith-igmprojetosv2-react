import { Box, StepIconProps, Typography } from "@mui/material";
import { useThemeMode } from "@store/useThemeMode";
import { colors } from "@theme/colors";

export const IconStep: React.FC<StepIconProps> = ({ active, completed, icon }) => {
  const { themeMode } = useThemeMode();
  const isDark = themeMode == "dark";

  const color = {
    completed: isDark ? colors.primary.light : colors.primary.main,
    active: isDark ? colors.primary.main : colors.primary.main,
  };
  return (
    <>
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          backgroundColor: active
            ? color?.active
            : completed
            ? color?.completed
            : "GrayText",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Typography color={"white"}>{completed ? "✓" : icon}</Typography>
      </Box>
    </>
  );
};
