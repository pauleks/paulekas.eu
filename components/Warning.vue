<script setup>
const { data: song } = useAsyncData('song', () => $fetch('/api/song'));
</script>

<template>
    <div class="parent">
        <div class="warning"><b>⚠️ This website is still under development!</b></div>
        <div class="music">
            <div v-if="!song" class="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div v-else-if="song.notListening" style="opacity: 0.4">💤 I'm not listening to anything</div>
            <div v-else>🎶 <a :href="song.url" target="_blank" rel="noreferrer noopener">{{ song.artist }} - {{ song.title }}</a></div>
        </div>
    </div>
</template>


<style scoped>
.parent {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 32px;

}

.parent>div {
    width: 50%;
}

.music {
    text-align: right;
    padding: 0 8px 0 0;
}

.warning {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ffb101;
    color: black;
    text-align: center;
    height: 32px;
}

.loading {
    padding: 0 8px 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
        opacity: 1
    }

    50% {
        opacity: 0.5
    }

    100% {
        opacity: 1
    }
}
</style>