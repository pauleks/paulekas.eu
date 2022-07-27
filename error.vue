<script setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="error">
        <h1>{{ error.statusCode }}</h1>
        <p @click="handleError">Go home!</p>
    </div>
</template>

<style scoped>
div>h1 {
    text-decoration: none !important;
    font-size: 15vh;
    margin: 0 0 32px 0;
}

.error {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

p {
    font-size: 6vh;
    text-decoration: underline;
    margin: 0;
    cursor: pointer;
}
</style>
