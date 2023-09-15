import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./pages/Welcome.vue"),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
