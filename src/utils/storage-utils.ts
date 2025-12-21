import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

const STORAGE_KEYS = {
  LANGUAGE: 'language',
} as const;

export const storageKeys = STORAGE_KEYS;

/**
 * Get value from storage by key
 * @param key - storage key
 * @returns stored value or null if not set
 */
export const getStorageValue = (key: string): string | null => {
  return storage.getString(key) || null;
};

/**
 * Set value in storage by key
 * @param key - storage key
 * @param value - value to save, if null or undefined - removes the key from storage
 */
export const setStorageValue = (key: string, value: string): void => {
  storage.set(key, value);
};

/**
 * Remove value from storage by key
 * @param key - storage key to remove
 */
export const removeStorageValue = (key: string): void => {
  storage.remove(key);
};
