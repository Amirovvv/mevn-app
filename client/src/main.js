import {
    createApp
} from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import ProgressSpinner from 'primevue/progressspinner';


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
    .component('InputText', InputText)
    .component('Textarea', Textarea)
    .component('InputNumber', InputNumber)
    .component('Dropdown', Dropdown)
    .component('ProgressSpinner', ProgressSpinner)
    .mount('#app')