import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css";
import '@fortawesome/fontawesome-free/css/all.css';

// Initialize Vue app
const app = createApp(App);

// Use router
app.use(router);

// Mount app
app.mount("#app");