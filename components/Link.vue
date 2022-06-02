<script setup>
const props = defineProps({
    href: String
});
</script>

<template>
    <a :href="href" target="_blank" rel="noreferrer noopener"><slot /></a>
</template>