import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './public/locales/en/ns1.json';

export const resources = {
  en: {
    translation: translationEN
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
});