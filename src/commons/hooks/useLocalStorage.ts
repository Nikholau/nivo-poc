import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { getStorageItem, setStorageItem } from '@commons/utils';

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const storageValue = getStorageItem(key);
    if (storageValue !== null) return storageValue;

    return initialValue instanceof Function ? initialValue() : initialValue;
  });

  useEffect(() => {
    setStorageItem(key, value);
  }, [value]);

  return [value, setValue];
}
