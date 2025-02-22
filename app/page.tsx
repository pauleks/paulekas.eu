import Biography from '@components/HomePage/Biography';
import Music from '@components/HomePage/Music';
import '@css/Home.module.css'

export const metadata = {
    title: 'paulekas.eu - software engineering student',
    // Dumb verification workaround for Mastodon
    icons: {
        other: [
            { rel: 'me', url: 'https://mastodon.gamedev.place/@paulekas' }
        ]
    }
}

export default async function Home() {
    return (
        <>
            <Biography />
            <Music />
        </>
    );
}
