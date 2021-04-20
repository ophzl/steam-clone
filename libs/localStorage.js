export const getSetting = (key, fallback) => {
  if (typeof window === undefined) return fallback;
  return window.localStorage.getItem(key) ?? fallback;
};

export const setSetting = (key, value) => {
  if (typeof window === undefined) return null;
  window.localStorage.setItem(key, value);
  return getSetting(key, null);
};

export const setSettingState = (key, value, stateCallback) => {
  stateCallback(value);
  return setSetting(key, value);
};
