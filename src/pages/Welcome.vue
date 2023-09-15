<script setup>
import {
    getProducts,
    getCategories,
    getProductsByCategory,
} from "../../api/services/product";
import { onMounted, ref } from "vue";
import ProductCard from "../components/ProductCard.vue";

const products = ref(null);
const categories = ref(null);
const activeCategory = ref(null);

const handleFilterByCategory = async (category) => {
    try {
        products.value = await getProductsByCategory(category);
        activeCategory.value = category;
    } catch (error) {
        return;
    }
};

const handleFilterClearing = async () => {
    try {
        products.value = await getProducts();
        activeCategory.value = null;
    } catch (error) {
        return;
    }
};

onMounted(async () => {
    try {
        products.value = await getProducts();
        categories.value = await getCategories();
    } catch (error) {
        throw new Error(error);
    }
});
</script>

<template>
    <div class="max-w-[1200px] w-full mx-auto my-12">
        <div class="flex gap-4 py-12">
            <template v-for="category in categories">
                <button
                    @click="handleFilterByCategory(category)"
                    class="px-3 py-2 bg-white rounded border"
                    :class="{
                        'bg-black text-white': category === activeCategory,
                    }"
                >
                    {{ category }}
                </button>
            </template>
            <button @click="handleFilterClearing" class="hover:underline">
                Clear filters
            </button>
        </div>
        <section class="grid grid-cols-3 my-16 gap-y-12 gap-x-8">
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </section>
    </div>
</template>
