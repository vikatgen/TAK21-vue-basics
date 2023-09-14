<script setup>
import { fakeStoreAPI } from "../api/fakeStoreService";
import { onMounted, ref } from "vue";
import ProductCard from "./components/ProductCard.vue";

const products = ref(null);

onMounted(async () => {
    try {
        products.value = await fakeStoreAPI.get("/products");
    } catch (error) {
        throw new Error(error);
    }
});
</script>

<template>
    <section
        class="max-w-[1200px] w-full mx-auto grid grid-cols-3 my-16 gap-y-12 gap-x-8"
    >
        <ProductCard
            v-for="product in products?.data"
            :key="product.id"
            :product="product"
        />
    </section>
</template>
