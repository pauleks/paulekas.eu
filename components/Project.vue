<template>
    <div class="project">
        <div class="name">
            <h4>{{ name }}</h4>
            <img :src="`https://skillicons.dev/icons?i=` + languages" />
        </div>
        <p>{{ description }}</p>
        <Link v-if="link" :href="link">Check out <b>{{ name }}</b></Link>

    </div>
</template>

<style scoped>
.project {
    border: 2px white solid;
    padding: 12px;

    border-radius: 8px;
    width: min(400px, 100%);
}

.name {
    display: flex;
    align-items: center;
    gap: 8px;
}

@media (max-width: 600px) {
    .name {
        flex-direction: column;
    }
}

.project h4 {
    font-size: 24px;
}

.project img {
    height: 24px;
}

.project h4,
.project p {
    margin: 0;
}
</style>

<script setup>
const props = defineProps({
    name: String,
    description: String,
    languages: String,
    link: String
});
</script>