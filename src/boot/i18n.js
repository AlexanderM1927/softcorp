import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import en from '../i18n/en'
import es from '../i18n/es'

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, es }
})

export default boot(({ app }) => {
  app.use(i18n)
})
