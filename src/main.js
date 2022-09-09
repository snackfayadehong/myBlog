import { createApp } from "vue";

//导入highlight
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

//导入ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.less";

import App from "./App.vue";
const app = createApp(App);

//创建highlight一个自定义全局指令
app.directive("highlight", el => {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

app.use(ElementPlus);

app.mount("#app");
