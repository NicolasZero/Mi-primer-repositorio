const routes = [
  {
    path: "/inicio",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "foro", name: "foro", component: () => import("pages/Foro.vue") },
      {
        path: "encuesta",
        name: "encuesta",
        component: () => import("pages/Encuesta.vue"),
      },
    ],
  },
  // login
  {
    path: "/",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("pages/Login.vue"),
      },
      {
        path: "registro",
        name: "registro",
        component: () => import("pages/Registro.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
