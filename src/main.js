import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import CommonMixin from "@/mixins/common.mixin";
import bootstrap from "bootstrap/dist/js/bootstrap.min";

Vue.config.productionTip = false;

// use bootstrap
Vue.prototype.$bootstrap = bootstrap;

// common mixin
Vue.mixin(CommonMixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
