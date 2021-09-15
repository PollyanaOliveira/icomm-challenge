// SET LOCALSTORAGE
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// GET LOCALSTORAGE
export const getStorage = (key, value = []) => (
  JSON.parse(localStorage.getItem(key)) || value);
