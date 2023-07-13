import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getStorageValue(key: string, defaultValue?: string) {
  try {
    const _value = await AsyncStorage.getItem(key);
    if (_value !== null) {
      return _value;
    }
    return defaultValue;
  } catch (error) {
    return defaultValue;
  }
}
export async function setStorageValue(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    throw error;
  }
}
