import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import router from './router'

library.add(faArrowLeft)



createApp(App).use(router).mount('#app')
