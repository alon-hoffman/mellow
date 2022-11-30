import { createApp } from 'vue'

import { router } from './router.js'
import { store } from './store/store.js'
import { editable,clickOutsideDirective,clickOnEscDirective } from './directives'

import './assets/styles/main.scss'
import rootCmp from './root-cmp.vue'

const app = createApp(rootCmp)
app.use(router)
app.use(store)
app.directive('editable', editable)
app.directive('click-outside', clickOutsideDirective)
app.directive('click-esc', clickOnEscDirective)

app.mount('#app')
