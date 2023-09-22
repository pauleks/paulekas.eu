import fs from 'fs/promises';
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {notFound} from "next/navigation";

async function fetchPost(id: string){
    const mdFiles = await fs.readdir('./blog');
    const entries = new Map();
    for (const fileName of mdFiles) {
        if (!fileName.matchAll(/\d{6}-\D+\.md/g)) continue;
        const date = `20${fileName.slice(0, 2)}-${fileName.slice(2, 4)}-${fileName.slice(4, 6)}`
        const name = fileName.slice(7, -3);
        const content = (await fs.readFile(`./blog/${fileName}`)).toString();
        const key = name.toLowerCase().replaceAll(" ", "-");
        entries.set(key, { date, name, content });
    }

    return entries.get(id);
}

export default async function Page({ params }: { params: { id: string } }) {
    const post = await fetchPost(params.id);

    if (!post) {
        return notFound();
    }

    return <div>
        <Link href={"/blog"}>↖ All blog posts</Link>
        <p style={ { opacity: 0.5 } }>Written on {post.date}</p>
        <hr style={ { margin: "3rem 0" } } />
        <ReactMarkdown>
            {post.content}
        </ReactMarkdown>
    </div>
}