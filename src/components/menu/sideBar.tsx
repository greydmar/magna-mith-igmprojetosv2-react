import { itensMenu } from "@data/menu";
import { Box, Paper } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@assets/logo.png";
import LogoWhite from "@assets/logo-white.png";
import { Stack } from "@mui/system";
import { useThemeMode } from "@store/useThemeMode";

export const SideBar = () => {
  const { themeMode } = useThemeMode();
  const isDark = themeMode == "dark";
  const [open, setOpen] = useState(false);
  const [openText, setOpenText] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setOpen((prev) => {
      if (prev) {
        setOpenText(false);
      }
      return !prev;
    });
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpenText(true);
      }, 600);
    }
  }, [open]);

  return (
    <>
      <Box
        component={Paper}
        elevation={8}
        sx={{
          width: open ? 250 : 50,
          transition: "width 0.8s ease-in-out",
          zIndex: 200,
        }}
      >
        <Stack height={"100vh"} >
          <List component="nav">
            {itensMenu?.map((item, index) => (
              <ListItemButton
              key={`menu-sidebar-${index}`}
                onClick={() => {
                  if (item?.action == "open") {
                    toggle();
                  } else {
                    navigate(item?.link as string);
                  }
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                  height: 40,
                }}
              >
                {item.icon}
                {openText && (
                  <ListItemText
                    primary={item?.text}
                    sx={{ paddingTop: 0.3, marginLeft: 2 }}
                  />
                )}
              </ListItemButton>
            ))}
          </List>
          <Box flexGrow={1} />
          <Box textAlign={"center"} marginBottom={5}>
            <img src={isDark ? LogoWhite : Logo} width={"80%"} />
          </Box>
        </Stack>
      </Box>
    </>
  );
};
