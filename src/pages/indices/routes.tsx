import { Routes } from "src/types";
import { PageIndice } from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "/indices",
      element: PageIndice,
      permission: [],
    },
  ];
};
