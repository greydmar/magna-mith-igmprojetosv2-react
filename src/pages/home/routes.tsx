import { Routes } from "src/types";
import { PageHome } from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "/",
      element: PageHome,
      permission: [],
    },
  ];
};
