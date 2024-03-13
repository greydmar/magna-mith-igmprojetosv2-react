import { getStorageTheme } from "@helpers";
import { create } from "zustand";

export type PropsTheme = {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
  changeTheme: (value: "light" | "dark") => void;
};

export const useThemeMode = create<PropsTheme>((set) => ({
  themeMode: getStorageTheme() ?? "light",

  toggleTheme: () =>
    set((state) => {
      const themeMode = state?.themeMode == "light" ? "dark" : "light";
      localStorage?.setItem("themeMode", themeMode);
      return { themeMode: themeMode };
    }),

  changeTheme: (value) =>
    set(() => {
      localStorage?.setItem("themeMode", value);
      return { themeMode: value };
    }),
}));
