import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { firebaseApp } from "./firebaseApp.js";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch("signIn", user);
    router.push("/dashboard").catch(() => {});
  } else {
    router.replace("/");
  }
});
