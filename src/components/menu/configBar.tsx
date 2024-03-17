import { AppBar, IconButton, Toolbar } from "@mui/material";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useThemeMode } from "@store/useThemeMode";

export const ConfigBar = () => {
  const { toggleTheme } = useThemeMode();

  return (
    <>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleTheme}
          >
            <ContrastIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
