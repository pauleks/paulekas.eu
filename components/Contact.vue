<template>
    <div>
        <div class="row">
            <div class="column">
                <h1 id="contact">Contact me</h1>
            </div>
            <div class="column">
                <p>The strongly suggested way to contact me is via my email <b>hi{at}paulekas.eu</b></p>
                <p>You can also contact me via Discord <b>ghostwolf#5420</b> if you really need to. However, I might not always be available to respond, as well as I tend to reject random friend requests.</p>
                <p><Link Href="https://github.com/TheOnlyGhostwolf">Also, feel free to check out my Github!</Link></p>
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
    padding: 48px;

    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.column > p {
    width: 100%;
}

b {
    text-decoration: underline dashed;
}

@media only screen and (max-width: 750px) {
    .row {
        flex-direction: column;
    }
}
</style>