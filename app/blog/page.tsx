import '@css/Home.module.css'
import Biography from "@components/HomePage/Biography";
import Music from "@components/HomePage/Music";
import BlogPosts from "@components/HomePage/BlogPosts";
import Section from "@components/HomePage/Section";
import Link from "next/link";

export const metadata = {
    title: 'paulekas.eu - software engineering student'
}

export default async function BlogPage() {
    // @ts-ignore
    return (
        <>
            <p><Link href={'/'}>↖ Back to homepage</Link></p>
            <Section sectionName={"blog"}>
                <BlogPosts />
            </Section>
        </>
    );
}