import { itensMenu } from "@data/menu";
import ContrastIcon from "@mui/icons-material/Contrast";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar as AppBarMui,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useThemeMode } from "@store/useThemeMode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme } = useThemeMode();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <AppBarMui position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "primary.contrastText" }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleTheme}
          >
            <ContrastIcon sx={{ color: "primary.contrastText" }} />
          </IconButton>
        </Toolbar>
      </AppBarMui>
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <Box
          role="presentation"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          sx={{ width: 250 }}
        >
          <List>
            {itensMenu?.map((item, index) => {
              return !item?.hidden ? (
                <ListItem
                  key={`mobile-menu-${index}`}
                  onClick={() => navigate(item.link as string)}
                  sx={{ display: "flex", gap: 2, cursor: "pointer" }}
                >
                  {item?.icon}
                  <ListItemText primary={item?.text} />
                </ListItem>
              ) : null;
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
