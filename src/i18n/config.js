import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  lng: 'ru',
  resources: {
    sk: {
      translations: require('./locales/sk/translations.json')
    },
    ru: {
      translations: require('./locales/ru/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['sk', 'ru'];

export default i18n;