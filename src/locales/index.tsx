import {I18nextProvider} from 'react-i18next';
import EnTranslation from './en.json';
import React from 'react';
import i18n from './i18n';

type PathInfo<T extends Record<string, any>> = keyof {
  [K in keyof T as T[K] extends string
    ? K
    : T[K] extends Record<string, any>
    ? `${K & string}.${PathInfo<T[K]> & string}`
    : never]: any;
};

export type RootTranslationPath = PathInfo<typeof EnTranslation>;

const LocalesProvider = ({children}: any) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default LocalesProvider;
