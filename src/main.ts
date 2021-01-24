import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { fetchListData } from "@/api/api";
import { Item } from "@/api/api-types";

function getTopItems() {
  return fetchListData("top");
}

declare global {
  interface Window {
    items: Item[];
  }
}

getTopItems().then(items => {
  window.items = items;
  createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
});
