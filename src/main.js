import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Tailwind from "primevue/passthrough/tailwind";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import "./style/style.css"
import ToastService from 'primevue/toastservice';
const app = createApp(App);
app.use(PrimeVue, { unstyled: true, pt: Tailwind });
app.use(router);
app.use(ToastService);
app.mount('#app');
