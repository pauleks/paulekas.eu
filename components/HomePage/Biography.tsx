import styles from "@css/Home.module.css";
import Link from "next/link";
import CurrentTime from "./CurrentTime";
import Section from "./Section";
import Image from 'next/image'
import BlogPosts from "@components/HomePage/BlogPosts";

export default function Bio() {
    // @ts-ignore
    return (
        <>
            <div className={styles.header}>
                <div className={styles.intro}>
                    <p>Hey there! I{`'`}m</p>
                    <div className={styles.flexLayout}>
                        <Image src='/images/typing.gif' alt='typing' width={156} height={148}/>
                        <div>
                            <h1>
                                Paulius
                            </h1>
                            <h2 style={{opacity: 0.5}}>
                                a software engineering student
                            </h2></div>
                    </div>
                </div>
                <div className={styles.links}>
                    <a href="https://github.com/pauleks" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://linkedin.com/in/pauliusgecas" target="_blank"
                       rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:hi@paulekas.eu" target="_blank">Email me!</a>
                    <a href="https://drive.google.com/file/d/1CHbcLHloE26uA4geXl0_G9VKJmoOLdw9/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>

            <Section sectionName="about me">
                <p>
                    I am a 20-years-old graduate of the{" "}
                    <a href="https://ktug.lt/" target="_blank" rel="noopener noreferrer">
                        Kaunas University of Technology Gymnasium
                    </a>{" "}
                    (2020 - 2022) and a Software Engineering student at{" "}
                    <a href="https://en.ktu.edu/" target="_blank" rel="noopener noreferrer">
                        Kaunas University of Technology
                    </a>{" "}
                    (2022-2026) from Lithuania.
                </p>
                <p>
                    I began learning coding in 5th grade when I took HTML and CSS beginner classes.{" "}
                    I then stopped until 7th grade when I started taking basic C++ lessons and using{" "}
                    it in competitive programming competitions in my country.
                </p>
                <p>
                    In 2020, I taught myself JavaScript, which has been my language of choice for{" "}
                    projects until recently when I switched to TypeScript.
                </p>
                <p>
                    I am now learning web development frameworks like React and Next.js, but my{" "}
                    university course and interests may change things. I am also quite interested in game development
                    too, but this is not something that I take seriously yet.{" "}
                    In the meantime, I{`'`}m working on a few projects that I hope to share soon!
                </p>
            </Section>

            <Section sectionName="blog">
                <BlogPosts />
            </Section>

            <Section sectionName="contact">
                <p>
                    It is currently <CurrentTime/> for me.
                </p>
                <p>
                    Feel free to write me an email at{" "}
                    <a href="mailto:hi@paulekas.eu">hi@paulekas.eu</a>.
                </p>
                <p>
                    Check out my{" "}
                    <a href="https://linkedin.com/in/pauliusgecas" target="_blank"
                       rel="noopener noreferrer">LinkedIn</a>{" "}
                    and my{" "}
                    <a href="https://github.com/pauleks" target="_blank" rel="noopener noreferrer">Github</a>{" "}
                    too!
                </p>
            </Section>
        </>


    );
}
