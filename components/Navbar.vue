<script setup>
const routes = ref([
    { route: '/#aboutme', label: 'About me', id: 'aboutme' },
    { route: '/#projects', label: 'Projects', id: 'projects' },
    { route: '/#contact', label: 'Contact me', id: 'contact' }
])

</script>

<template>
    <div class="navbar">
        <a href="/#" class="logo">paulekas.eu</a>
        <div class="routes">
            <span v-for="selection in routes" :key=selection.key>
                <a :href="selection.route">{{ selection.label }}</a>
            </span>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;

    align-content: center;
    padding: 8px 10%;

    background: var(--gray);
    color: var(--red);
}

a {
    transition: linear 0.1s;
}

a:hover {
    color: white;
}

.logo {
    font-size: 48px;
    font-weight: 500;
}

.routes {
    display: flex;
    gap: 16px;
    align-items: center;

    font-size: 24px;
}
</style>