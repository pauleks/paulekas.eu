<template>
    <p>Jeigu normaliam žmogui tereiktų <input v-model.number="laikas" /> minučių atlikti kokį darbą, Pauliui tai užtruktų <span>{{ laikas * laikas || '---' }}</span> minučių</p>
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
    width: 50px
}

span {
    font-weight: 900;
    text-decoration: underline wavy white;
}

p {
    text-align: center;
    margin: 16px;
}
</style>

<script setup>
let laikas = ref(0);


</script>