import './assets/main.css';
import 'primevue/resources/themes/lara-light-amber/theme.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';

// PrimeVue Components
import Panel from 'primevue/panel';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Image from 'primevue/image';


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.component('Panel', Panel);
app.component('Checkbox', Checkbox);
app.component('Button', Button);
app.component('Image', Image);

app.mount('#app');
