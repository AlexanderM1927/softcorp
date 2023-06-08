import { QSpinnerGears, QSpinnerAudio } from 'quasar'

export const functions = {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    goTo (url) {
      this.$router.push(url).catch(err => {
        if (err._name === 'NavigationDuplicated') {
          // console.log('it is in page')
        }
      })
    },
    alert (type, msg) {
      this.$q.notify({
        message: msg,
        color: type
      })
    },
    activateLoading (message, spinner = 0) {
      const show = {
        message: message
      }

      if (spinner === 1) {
        show.spinner = QSpinnerGears
      } else if (spinner === 2) {
        show.spinner = QSpinnerAudio
      }
      this.$q.loading.show(show)
    },
    disableLoading () {
      this.$q.loading.hide()
    }
  }
}
