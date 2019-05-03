import Vue from "vue";
import Router from "vue-router";
import Index from "../index.vue";
import Jianjie from "../jianjie.vue";
import Home from "../home.vue";
import Wenjian from "../wenjian.vue";
import Anquan from "../anquan.vue";
import Suzhi from "../suzhi.vue";
import Stu from "../stu.vue";
import Teach from "../teach.vue";
import Diaocha from "../diaocha.vue";
import Dashi from "../dashi.vue";
import Contact from "../contact.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/jianjie",
          name: "jianjie",
          component: Jianjie
        },
        {
          path: "/index",
          name: "index",
          component: Index
        },
        {
          path: "/wenjian",
          name: "wenjian",
          component: Wenjian
        },
        {
          path: "/anquan",
          name: "anquan",
          component: Anquan
        },
        {
          path: "/suzhi",
          name: "suzhi",
          component: Suzhi
        },
        {
          path: "/stu",
          name: "stu",
          component: Stu
        },
        {
          path: "/teach",
          name: "teach",
          component: Teach
        },
        {
          path: "/diaocha",
          name: "diaocha",
          component: Diaocha
        },
        {
          path: "/dashi",
          name: "dashi",
          component: Dashi
        },
        {
          path: "/contact",
          name: "contact",
          component: Contact
        }
      ]
    }
  ]
});
