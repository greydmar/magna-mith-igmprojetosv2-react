export const localStorageHandler = (key: string, value: any = undefined) => {
  const storedValue = localStorage.getItem(key);

  if (value === undefined) {
    if (storedValue === null) {
      return null;
    }
    return JSON.parse(storedValue);
  }

  localStorage.setItem(key, JSON.stringify(value));

  return value;
};
