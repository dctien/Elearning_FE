import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/loginpage",
    name: "LoginPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/subject",
    name: "Subject",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Subject.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/News.vue"),
  },
  {
    path: "/abouts",
    name: "Abouts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Abouts.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
