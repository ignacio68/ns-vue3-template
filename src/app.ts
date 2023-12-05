import { createApp } from 'nativescript-vue';
import { router } from './routes';
import { createPinia } from 'pinia';
import App from './views/App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.start();
