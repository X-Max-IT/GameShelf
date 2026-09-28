import { useEffect, useState } from "react";
import { getStorage, removeStorage, setStorage } from "../utils/localStorage";

export default function useUserName() {
  const [userName, setUserName] = useState(() => {
    const stored = getStorage("userName");
    if (!stored) {
      setStorage("userName", "Гость");
      return "Гость";
    }
    return stored;
  });

  useEffect(() => {
    const handleStorageName = () => {
      setUserName(getStorage("userName") || "Гость");
    };
    window.addEventListener("storage", handleStorageName);
    return () => window.removeEventListener("storage", handleStorageName);
  }, []);

  const updateUserName = (name) => {
    setStorage("userName", name);
    setUserName(name);
  };

  const removeUserName = (key = "userName") => {
    removeStorage(key);
  };

  return { userName, updateUserName, removeUserName };
}
