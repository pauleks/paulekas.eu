<template>
    <p>Jeigu normaliam žmogui tereiktų <input v-model.number="laikas" /> minučių atlikti kokį darbą, Pauliui tai užtruktų <span>{{ laikas * 1.75 || '---' }}</span> minučių</p>
    <img src="assets/peepoCry.png">
</template>

<style scoped>
input {
    border: 1px solid white;
    border-radius: 4px;
    padding: .2em .6em;
    margin-top: 10px;
    background: transparent;
    transition: background-color .5s;
    color: white;
    text-align: center;
    width: 50px;
    height: 40px;

    font-size: xx-large;
}

span {
    font-weight: 900;
    text-decoration: underline wavy white;
}

p {
    text-align: center;
    margin: 16px;
    font-size: xx-large;
}

img {
    margin-left: calc(50% - 65px);
}
</style>

<script setup>
let laikas = ref(0);


</script>