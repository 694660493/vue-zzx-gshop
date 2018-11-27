import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import TopHeader from "./components/TopHeader/topHeader.vue"

Vue.component("TopHeader",TopHeader);
new Vue({
  el:"#app",
  components:{App},
  template:`<App/>`,
  router
})
