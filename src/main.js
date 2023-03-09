import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* Set up using Vue 3 */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBars, faStar, faBarsProgress, faLink, faEnvelope} from '@fortawesome/free-solid-svg-icons'

import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */


library.add(faUserSecret)
library.add(faBars)
library.add(faStar)
library.add(faBarsProgress)
library.add(faLink)
library.add(faGithub)
library.add(faLinkedin)
library.add(faEnvelope)




createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
