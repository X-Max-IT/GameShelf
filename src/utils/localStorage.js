export function getStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return localStorage.getItem(key); // На случай если там не JSON, а строка
  }
}

export function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    localStorage.setItem(key, String(value)); // Если не вышло сохранить JSON - просто строку
  }
}

export function removeStorage(key) {
  localStorage.removeItem(key);
}
