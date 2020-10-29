import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import CommonMixin from "@/mixins/common.mixin";

import "bootstrap/dist/js/bootstrap.bundle";

Vue.config.productionTip = false;

// common mixin
Vue.mixin(CommonMixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
