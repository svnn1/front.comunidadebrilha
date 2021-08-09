import { createApp } from "vue";

import router from "@/modules/core/router";

import App from "./App.vue";

import "@/modules/core/assets/css/tailwind.css";

createApp(App).use(router).mount("#app");
