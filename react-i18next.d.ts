import { resources, defaultNS } from './i18n';
import ns1 from 'locales/en/ns1.json';

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  type DefaultResources = typeof resources['en'];
  interface Resources extends DefaultResources {
    ns1: typeof ns1
  }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: {
      ns1: typeof ns1
    };
  };
};