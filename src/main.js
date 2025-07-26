import './assets/main.css';

import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';

import en from './assets/translations/en.json';
import pl from './assets/translations/pl.json';
import ua from './assets/translations/ua.json';
import ru from './assets/translations/ru.json';

const messages = {
  en,
  pl,
  ru,
  ua,
};

const i18n = createI18n({
  legacy: false, // Use Composition API mode (required for Vue 3)
  locale: 'en', // set initial locale
  fallbackLocale: 'en', // set fallback locale if translation is missing
  messages, // set messages
  globalInjection: true, // Make $t available globally (optional, but convenient)
});

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');
