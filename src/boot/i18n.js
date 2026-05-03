import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import en from '../i18n/en'
import es from '../i18n/es'

function detectLocale () {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  if (timezone === 'America/Bogota') return 'es'
  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, es }
})

export default boot(({ app }) => {
  app.use(i18n)
})
