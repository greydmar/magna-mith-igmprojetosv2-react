import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

export const itensMenu = [
  {
    icon: <MenuIcon />,
    text: "Nome do usuário",
    action: "open",
    hidden: "mobile"
  },
  {
    icon: <HomeIcon />,
    text: "Página inicial",
    action: "link",
    link: "/",
  },
  {
    icon: <NoteAddIcon />,
    text: "Índice",
    action: "link",
    link: "/indices",
  },
];
