import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./pages/Welcome.vue"),
    },
    {
        path: "/product/:id",
        name: "product.index",
        component: () => import("./pages/singleProduct.vue"),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
