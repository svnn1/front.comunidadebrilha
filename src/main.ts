import { createApp } from "vue";

import router from "@/core/router";

import App from "./App.vue";

import "@/core/assets/css/tailwind.css";

createApp(App).use(router).mount("#app");
