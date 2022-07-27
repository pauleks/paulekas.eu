<script setup>
const props = defineProps({
    href: String
});
</script>

<template>
    <a :href="href" target="_blank" rel="noreferrer noopener">
        <slot /> <span class="arrow">↗</span>
    </a>
</template>

<style scroped>
a {
    text-decoration: underline white 1px solid;
}

a:hover {
    text-decoration: underline white 1px dashed;
}

.arrow {
    width: 50%;
    height: 50%;
}
</style>