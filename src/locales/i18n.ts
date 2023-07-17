import EnTranslation from './en.json';
import ViTranslation from './vi.json';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {Resource} from 'i18next';
import {StorageKey} from '@/common/enums';
import {getAsyncStorage, setAsyncStorage} from '@/utils/storage';

export enum AvailableLang {
  En = 'en',
  Vi = 'vi',
}

export const DefaultLanguage = AvailableLang.En;

export const I18nResource = {
  [AvailableLang.En as string]: {
    translation: EnTranslation,
  },
  [AvailableLang.Vi as string]: {
    translation: ViTranslation,
  },
} as Resource;

i18n
  .use(initReactI18next)
  .use({
    init: Function.prototype,
    type: 'languageDetector',
    async: true,
    detect: async (callback: any) => {
      const selectedLanguage = await getAsyncStorage(
        StorageKey.LANGUAGE,
        DefaultLanguage,
      );
      if (selectedLanguage) {
        callback(selectedLanguage);
      }
    },
    cacheUserLanguage: () => {},
  })
  .init({
    compatibilityJSON: 'v3',
    resources: I18nResource,
    fallbackLng: DefaultLanguage,
    interpolation: {
      escapeValue: false,
    },
    react: {useSuspense: false},
  });

i18n.on('languageChanged', async (language: string) => {
  await setAsyncStorage(StorageKey.LANGUAGE, language);
});

export default i18n;
