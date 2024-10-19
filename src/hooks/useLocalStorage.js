import { useEffect, useState } from "react";

const useLocalStorage = (Token, initialiValue) => {
  const [value, setValue] = useState(() => {
    const localState = localStorage.getItem(Token);
    return localState ? JSON.parse(localState) : initialiValue;
  });

  useEffect(() => {
    localStorage.setItem(Token, JSON.stringify(value));
  });

  return [value , setValue] ; 
};

export { useLocalStorage };