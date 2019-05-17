import Vue from "vue";
import App from "./App.vue";
import { sync } from "vuex-router-sync";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "normalize.css";
import { Button, Icon, Popover, Modal, Input, Form } from "ant-design-vue";

sync(store, router);

[Button, Icon, Popover, Modal, Input, Form].forEach(plugin => {
  Vue.use(plugin);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#MOUNT_NODE");
