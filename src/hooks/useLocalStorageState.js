import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultVal) {
  // make Piece of state, based off of value in localstorage(
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  // use useEffect to update local storage when stage changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export default useLocalStorageState;
