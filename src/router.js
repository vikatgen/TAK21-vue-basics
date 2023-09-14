import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./App.vue"),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
