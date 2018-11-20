export const state = () => ({
  locales: ['en', 'es', 'fr'],
  locale: 'en'
})

export const mutations = {
  SET_LOCALE(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
