const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const setLocalStorage = (key, payload) => {
  localStorage.setItem(
    key,
    typeof payload === "object" ? JSON.stringify(payload) : payload
  );
};

const setLocalStorageObject = (obj) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const payload = obj[key];
      localStorage.setItem(
        key,
        typeof payload === "object" ? JSON.stringify(payload) : payload
      );
    }
  }
};

const clearLocalByKey = (key) => {
  localStorage.removeItem(key);
};

export {
  getLocalStorage,
  setLocalStorage,
  setLocalStorageObject,
  clearLocalByKey,
};
