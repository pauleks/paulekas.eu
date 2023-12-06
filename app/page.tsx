import Head from 'next/head';
import Biography from '@components/HomePage/Biography';
import Music from '@components/HomePage/Music';
import '@css/Home.module.css'

export const metadata = {
    title: 'paulekas.eu - software engineering student'
}

export default async function Home() {
    return (
        <>
            <Head>
                <a rel="me" href="https://mastodon.gamedev.place/@paulekas"></a>
            </Head>
            <Biography />
            <Music />
        </>
    );
}
