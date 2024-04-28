import en from './en.json';
import tr from './tr.json';

import { init18n } from '@/core/i18n/init';

export const resources = {
  tr: {
    translation: tr,
  },
  en: {
    translation: en,
  },
};

export const fallbackLng = 'en';

export type LanguageCode = keyof typeof resources;

const i18n = init18n({ resources, fallbackLng });

export default i18n;
