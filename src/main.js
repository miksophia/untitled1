import { createApp } from 'vue'
import App from './App.vue'
import AppButton from './components/AppButton.vue'
//
// App.component('app-button', AppButton)

createApp(App)
  .component('app-button', AppButton)
  .mount('#app')
