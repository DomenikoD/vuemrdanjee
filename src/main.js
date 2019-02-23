import Vue from "vue";
import App from "./App.vue";
import BaseIcon from "@/components/BaseIcon.vue";

Vue.component("BaseIcon", BaseIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
