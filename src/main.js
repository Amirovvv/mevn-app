import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import Card from 'primevue/card';

import 'primevue/resources/themes/saga-blue/theme.css'       
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .component('Button', Button)
    .component('Card', Card)
    .mount('#app')