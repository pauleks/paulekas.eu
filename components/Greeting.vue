<script setup>
let title = ref(''), description = ref(''), hideText = ref(false), whichOne = 1;
const names = [
    { name: 'Paulius', description: 'That\'s my real name!' }, 
    { name: 'ghostwolf', description: 'My online alias' }
];

const setName = () => {
    hideText.value = true;
    setTimeout(() => {
        title.value = names[whichOne].name;
        description.value = names[whichOne].description;
        whichOne++;
        if (whichOne == names.length) whichOne = 0;
        hideText.value = false;
    }, 500);
}

setInterval(() => {
    setName();
}, 5000);

title.value = names[0].name;
description.value = names[0].description;
</script>

<template>
    <div class="section">
        <h2>👋 Hello and welcome! My name is</h2>
        <h1 :class="{ hidden: hideText }">{{ title }}</h1>
        <h3 :class="{ hidden: hideText }">{{ description }}</h3>
    </div>
    <Blob />
</template>

<style scoped>
.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 16px;
    height: 400px;
}

h1,
h3 {
    transition: linear 300ms;
    opacity: 1;
    margin: 8px;
}

h1 {
    font-size: 96px;
}

h1, h2, h3 {
    z-index: 10;
}

.hidden {
    opacity: 0;
}

@media only screen and (max-width: 500px) {
    h1 {
        font-size: 20vw;
    }

    h2 {
        font-size: 5vw;
    }

    h3 {
        font-size: 4vw;
    }
}
</style>