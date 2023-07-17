import {StorageKey} from '@/common/enums';
import {MMKV} from 'react-native-mmkv';
import {Logger} from '../logger';
export const storageApp = new MMKV({
  id: 'app-storage',
  encryptionKey: 'app-storage-encryption-key',
});
export const getAsyncStorage = (
  key: StorageKey,
  fallback?: string,
): string | undefined => {
  try {
    return storageApp.getString(key) ?? fallback;
  } catch (err) {
    const logger = new Logger(`${key}-Storage`);
    logger.error(err);
    return fallback;
  }
};

export const setAsyncStorage = (
  key: StorageKey,
  value?: string | null | undefined,
) => {
  try {
    if (value != null) {
      storageApp.set(key, value);
    } else {
      storageApp.delete(key);
    }
  } catch (err) {
    const logger = new Logger(`${key}-Storage`);
    logger.error(err);
  }
};

export const deleteAsyncStorage = (key: StorageKey) => {
  try {
    storageApp.delete(key);
  } catch (err) {
    const logger = new Logger(`${key}-Storage`);
    logger.error(err);
  }
};
