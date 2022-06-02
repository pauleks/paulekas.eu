<script setup>
let years = ref('');

setInterval(() => {
    let birthday = new Date('2003-11-30'), now = new Date();
    years.value = (Math.abs(now - birthday) / (1000 * 60 * 60 * 24 * 365)).toFixed(8);
}, 100)
</script>

<template>
    <div>
        <div class="row">
            <div class="column">
                <h1 id="aboutme">About me</h1>
                <img src="~/assets/me.png" alt="My avatar">
            </div>
            <div class="column">
                <p>I'm <b>Paulius</b> <span class="pronouns">(he/him)</span>, <b>{{ years }}</b> years old, a self-taught hobbyist coder and soon-to-be software engineering student from <b><span class="lithuania"><Link Href="https://en.wikipedia.org/wiki/Lithuania">Lithuania</Link>.</span></b></p>
                <p>For my free time, I like to write various big and small <a href="/#projects">projects</a> using mostly Javascript and <Link Href="https://nodejs.org/">Node.js</Link> (I'm trying to master this language), but I also know basic C++ which I used at school and in various coding competitions and I'm also looking forward to learning <Link Href="https://www.rust-lang.org/">Rust</Link> in the future.</p>
                <p>I'm a perfectionist, therefore I always try to make my creations the best ones.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    justify-content: space-between;
}

.column {
    flex: 50%;
    padding: 24px;

    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.column > p {
    width: 100%;
}

.column > img {
    max-width: 400px;
    border: 12px dashed var(--red);
}

.pronouns {
    opacity: 0.6;
}

.lithuania {
    background: linear-gradient(120deg, #fbea00, #00f821, #ff4a32);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

#aboutme {
    font-size: 36px;
}
</style>