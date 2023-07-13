declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

import {RootTranslationPath} from '@/locales';

declare module 'i18next' {
  interface TFunction<
    N extends Namespace = DefaultNamespace,
    TKPrefix = undefined,
    ActualNS extends Namespace = N extends null ? DefaultNamespace : N,
  > {
    <
      TDefaultResult extends DefaultTFuncReturn = string,
      TInterpolationMap extends object = StringMap,
    >(
      key: RootTranslationPath,
      options: TOptions<TInterpolationMap> & {defaultValue: string},
    ): TFuncReturn<ActualNS, string, TDefaultResult, TKPrefix>;
  }
}