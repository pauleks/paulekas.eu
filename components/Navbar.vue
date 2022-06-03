<script setup>
let navigationOpened = ref(false);

const routes = ref([
    { route: '/#aboutme', label: 'About me', id: 'aboutme' },
    { route: '/#projects', label: 'Projects', id: 'projects' },
    { route: '/#contact', label: 'Contact me', id: 'contact' }
])

const openNav = () => navigationOpened.value = true;
const closeNav = () => navigationOpened.value = false;

</script>

<template>
    <div class="navbar">
        <a href="/#" class="logo">paulekas.eu</a>
        <div class="routes">
            <span v-for="selection in routes" :key="selection.key">
                <a :href="selection.route">{{ selection.label }}</a>
            </span>
            <span>
                <Link Href="https://github.com/TheOnlyGhostwolf"><GithubIcon class="github" /></Link>
            </span>
        </div>
        <div class="navigationOverlayOpenButton" @click="openNav()">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="navigationOverlay" :class="{ navigationOpen: navigationOpened }">
        <div class="navigationOverlayCloseButton" @click="closeNav()">
            &times;
        </div>
        <div class="navigationOverlayContent">
            <span v-for="selection in routes" :key="selection.key" @click="closeNav()">
                <a :href="selection.route">{{ selection.label }}</a>
            </span>
            <span>
                <Link Href="https://github.com/TheOnlyGhostwolf"><GithubIcon class="github" /></Link>
            </span>
        </div>
    </div>
</template>

<style scoped>
.navigationOverlayCloseButton, .navigationOverlayOpenButton {
    cursor: pointer;
}

.navigationOpen {
    height: 100% !important;
}

.navigationOverlayOpenButton {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 32px;
    height: 32px;

    display: none;
}

.navigationOverlayOpenButton > div {
    height: 10%;
    width: 100%;
    border-radius: 5px;
    background-color: var(--red);
}

.navigationOverlayOpenButton:hover > div {
    background-color: white;
}

.navigationOverlay {
    height: 0;
    width: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: var(--red);
    overflow-x: hidden;
    transition: 0.5s;
}

.navigationOverlayContent {
    position: relative;
    top: 25%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
}

.navigationOverlayContent > span > a > svg {
    fill: white !important;
}

.navigationOverlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: white;
  transition: 0.3s;
}

.navigationOverlay a:hover, .navigationOverlay a:focus {
  text-decoration: underline;
}

.navigationOverlay .navigationOverlayCloseButton {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .navigationOverlay a {font-size: 20px}
  .navigationOverlay .navigationOverlayCloseButton {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

@media screen and (max-width: 850px) {
    .routes {
        display: none !important;
    }

    .navigationOverlayOpenButton {
        display: flex;
    }

    .logo {
        font-size: 6vw !important;
    }
}

.navbar {
    display: flex;
    justify-content: space-between;

    align-items: center;
    padding: 8px 10%;

    background: var(--gray);
    color: var(--red);
}

a {
    transition: linear 0.1s;

    display: flex;
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
    justify-content: center;

    font-size: 24px;
}

.github {
    width: 32px;
    height: 32px;
}
</style>