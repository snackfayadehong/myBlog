import { createApp } from "vue";

//导入ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "./style.less";

import App from "./App.vue";

createApp(App).use(ElementPlus).mount("#app");
