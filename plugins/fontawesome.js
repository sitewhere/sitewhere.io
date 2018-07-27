import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBook)
library.add(faGithub)
library.add(faDiscord)
Vue.component('font-awesome-icon', FontAwesomeIcon)
