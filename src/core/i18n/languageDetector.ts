import * as Localization from 'expo-localization';
import { LanguageDetectorModule } from 'i18next';

export const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => {
    const locales = Localization.getLocales();
    const firstLanguageCode = locales[0]?.languageCode ?? 'tr';
    return firstLanguageCode;
  },
  cacheUserLanguage: () => {},
};
