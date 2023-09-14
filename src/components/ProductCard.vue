<script setup>
defineProps({
    product: Object,
});
</script>

<template>
    <article>
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
    </article>
</template>
