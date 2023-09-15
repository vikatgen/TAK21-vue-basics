<script setup>
import { RouterLink } from "vue-router";

defineProps({
    product: Object,
});
</script>

<template>
    <RouterLink :to="{ name: 'product.index', params: { id: product.id } }">
        <img
            :src="product.image"
            :alt="product.description"
            class="w-full aspect-video object-contain"
        />
        <div class="mt-8 px-2 space-y-4">
            <h4 class="font-bold">{{ product.title }}</h4>
            <p class="text-gray-500 line-clamp-3">
                {{ product.description }}
            </p>
        </div>
    </RouterLink>
</template>
