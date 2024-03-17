export const getStorageTheme = () => {
  const storedValue = localStorage.getItem("themeMode");

  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (storedValue === null) {
    return prefersDarkMode ? "dark" : "light";
  }

  return storedValue as "light" | "dark";
};