<script setup>
const { pending, data: song } = useLazyAsyncData('song', () => $fetch('/api/song'));

watch(song, (newSong) => {
    console.log(newSong);
})
</script>

<template>
    <p v-if="!song?.notListening">
        I'm currently listening to
        <Link :href="song.url">{{ song.title }} by {{ song.artist }}</Link>
    </p>
</template>


<style scoped>
.music {
    height: 32px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 8px 0 0;
}

.loading {
    padding: 0 8px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading>span {
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 11px 5px;
    border-radius: 50%;
    background-color: white;
    animation: loading 1s linear infinite;
}

.loading>span:nth-child(1) {
    animation-delay: 0.1s;
}

.loading>span:nth-child(2) {
    animation-delay: 0.2s;
}

.loading>span:nth-child(3) {
    animation-delay: 0.3s;
}

.loading>span:nth-child(4) {
    animation-delay: 0.4s;
}

@keyframes loading {
    0% {
        opacity: 0.6
    }

    50% {
        opacity: 0.3
    }

    100% {
        opacity: 0.6
    }
}
</style>