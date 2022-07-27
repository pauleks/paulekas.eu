<template>
    <div class="header">
        <div class="intro">
            <p>Hey there! I'm</p>
            <h1 :class="{ hidden: hideText }">{{ title }}</h1>
            <h2 :class="{ hidden: hideText }" class="halfopacity">{{ description }}</h2>
        </div>
        <div class="links">
            <Link href="https://github.com/TheOnlyGhostwolf" class="github">Github</Link>
            <Link href="https://www.linkedin.com/in/paulius-ge%C4%8Das-925193207" class="linkedin">LinkedIn</Link>
            <Link href="mailto:hi@paulekas.eu" class="email">Email me!</Link>
        </div>
    </div>
    <div class="section">
        <div class="sectionName">
            <h3>about me</h3>
        </div>
        <div class="sectionContent">
            <p>I'm an 18 years-old
                <Link href="https://ktug.lt/">Kaunas University of Technology Gymnasium</Link> graduate from Lithuania, planning to study software engineering in the near future.
            </p>
            <p>During my free time, I like to master programming by creating various bigger and smaller projects (and you can find some of them below)! My programming language of choice is <strong>JavaScript</strong>, I started using it in 2020 and learned it by initially creating Discord bots, but nowadays, I'm trying to switch over to <strong>
                    <Link href="https://www.typescriptlang.org/">TypeScript</Link>
                </strong> as my primary choice for web development.
            </p>
            <p>I'm available for hire! Feel free to contact me via email.</p>
        </div>
    </div>
    <div class="section">
        <div class="sectionName">
            <h3>projects</h3>
        </div>
        <div class="sectionContent">
            <Project name="Doodled" description="Currently under early stages of development. A revisioned drawing game with multiplayer support, leveling system, parties and more!" languages="ts,nextjs,react,prisma,mongodb,redis,express,nodejs,discord" />
            <Project name="Satan's Pepper" description="Weirdcore genre game jam game, with the full version coming soon. 200k views on Let's play's on Youtube!" languages="js,ps" link="https://theonlyghostwolf.itch.io/satans-pepper" />
            <Project name="Caption It Jerma!" description="GIF caption generator bot, dedicated to a content creator Jerma985." languages="js,discord,nodejs" link="https://www.reddit.com/r/jerma985/comments/uplzkd/i_made_a_jermathemed_caption_bot_that_adds_your/" />
            <Project name="Snowflakes" description="Minigame bot, where you catch dropped snowflakes in channels." languages="js,discord,nodejs" link="https://github.com/TheOnlyGhostwolf/snowflakes" />
            <Project name="This website! :D" description="You're looking at it right now!" languages="js,vue,nuxtjs,css,nodejs" link="https://github.com/TheOnlyGhostwolf/PersonalWebsite" />
        </div>
    </div>
    <div class="section">
        <div class="sectionName">
            <h3>contact</h3>
        </div>
        <div class="sectionContent">
            <p>My timezone is <b>UTC+03 (EEST)</b>, therefore it is <b>{{ time }}</b> for me</p>
            <p>Feel free to write me an email to
                <Link href="mailto:hi@paulekas.eu">hi@paulekas.eu</Link>
            </p>
            <p>Check out my
                <Link href="https://www.linkedin.com/in/paulius-ge%C4%8Das-925193207">LinkedIn</Link> and my
                <Link href="https://github.com/TheOnlyGhostwolf">Github</Link> too!
            </p>
            <p>You can also contact me on Discord (but this is not preferred): ghostwolf#5420</p>
        </div>
    </div>
    <Music class="halfopacity" />
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.header .links {
    display: flex;
    flex-direction: row;
    gap: 8px;
}

@media (max-width: 700px) {
    .header {
        flex-direction: column;
        gap: 16px;
    }
}

.section {
    margin: 32px 0 0 0;

    display: flex;
    flex-direction: row;

    align-items: flex-start;

    gap: 16px;

    width: max(min(600px, 100%), 70%);
}

.sectionName {
    writing-mode: sideways-lr;
}

.sectionContent>p {
    margin: 0;
}

.sectionContent {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.halfopacity {
    opacity: 0.5;
}

.intro {
    display: flex;
    flex-direction: column;
    gap: 0;
}

h3,
.intro>* {
    margin: 0;
    transition: 300ms linear;
}

.intro>h1 {
    font-size: 4rem;
}

.hidden {
    opacity: 0;
}
</style>

<script setup>
useHead({
    title: "paulekas.eu - experimentalist developer",
})

let title = ref(''), description = ref(''), hideText = ref(false), whichOne = 1, time = ref('');
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

// github copilot LULW
const pad = (num) => num < 10 ? `0${num}` : num;
const updateTime = () => {
    const date = new Date();
    const hours = date.getUTCHours() + 3 < 24 ? date.getUTCHours() + 3 : date.getUTCHours() + 3 - 24;
    const minutes = date.getUTCMinutes();
    time.value = `${pad(hours)}:${pad(minutes)}`;
}

setInterval(updateTime, 1000);

setInterval(() => {
    setName();
}, 5000);

title.value = names[0].name;
description.value = names[0].description;
</script>
