import fs from 'fs/promises'
import Link from "next/link";
import {sort} from "next/dist/build/webpack/loaders/css-loader/src/utils";

async function GetBlogPosts() {
    const mdFiles = await fs.readdir('./blog');
    const entries = [];
    for (const fileName of mdFiles) {
        if (!fileName.match(/\d{6}-\D+\.md/)) continue;
        const date = `20${fileName.slice(0, 2)}-${fileName.slice(2, 4)}-${fileName.slice(4, 6)}`
        const name = fileName.slice(7, -3);
        const key = name.toLowerCase().replaceAll(" ", "-");
        entries.push(
            <p key={key}>
                <span style={ { opacity: 0.5, marginRight: "8px" } }>{date}</span>
                <Link href={`/blog/${key}`} style={ { paddingBottom: "16px" } }>{name}</Link>
            </p>
        );
    }

    return entries.reverse();
}

export default async function BlogPosts() {
    const posts = await GetBlogPosts();

    return (
        <>
            {posts}
        </>
    );
}