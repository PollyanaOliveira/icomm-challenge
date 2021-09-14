// SET LOCALSTORAGE
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// GET LOCALSTORAGE
export const getStorage = (key, value) => {
  JSON.parse(localStorage.getItem(key, value));
};

// REMOVE LOCALSTORAGE
export const removeStorage = (id, key) => {
  const update = key.filter((product) => product.id !== id);
  setLocalStorage('cart', update); return update;
};
