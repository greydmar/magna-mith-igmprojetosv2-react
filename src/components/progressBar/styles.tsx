import { StyleSx } from "src/types";

export const styles: StyleSx = {
  position: "relative",
  minHeight: 25,
  borderRadius: 3,
  overflow: "hidden",
};

export const stylesInternalBar: StyleSx = {
  position: "absolute",
  borderRadius: 3,
  transition: "width 0.8s ease-in-out",
  height: "100%",
  zIndex: 100,
  top: 0,
};

export const stylesContent: StyleSx = {
  position: "absolute",
  display: "block",
  fontWeight: "bold",
  fontSize: 12,
  padding: 0.5,
  zIndex: 200,
  marginLeft: 3,
  textShadow: "0px 0px 3px #00376c",
  top: 0,
  color: "primary.contrastText",
};
