import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faWordpress, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(faGithub, faWordpress, faLinkedin, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)