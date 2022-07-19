import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import "~/styles/index.scss";
import "uno.css";

const app = createApp(App);
window.Kakao.init("a46fcbce59d73e5f35aa8ca5818f08d8");
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount("#app");
