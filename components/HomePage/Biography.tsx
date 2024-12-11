import styles from "@css/Home.module.css";
import Link from "next/link";
import CurrentTime from "./CurrentTime";
import Section from "./Section";
import Image from 'next/image'
import BlogPosts from "@components/HomePage/BlogPosts";

// chat geepeetee
const calculateAge = (birthday: string) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default function Bio() {
    const birthday = "2003-11-30";
    const age = calculateAge(birthday);
    
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
                    I am a {age}-years-old graduate of the{" "}
                    <a href="https://ktug.lt/" target="_blank" rel="noopener noreferrer">
                        Kaunas University of Technology Gymnasium
                    </a>{" "}
                    and a Software Engineering student at{" "}
                    <a href="https://en.ktu.edu/" target="_blank" rel="noopener noreferrer">
                        Kaunas University of Technology
                    </a>{" "}
                    from Lithuania.
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
                <p>At this moment, I sell vapes at <a href="https://royalsmoke.lt/" target="_blank">RoyalSmoke</a> (lol)</p>
            </Section>

            <Section sectionName="projects">
                <p>
                    Some of my projects include:
                    <ul>
                        <li>an e-commerce store - <a href="https://kirakirafox.eu/" target="_blank">kirakirafox.eu</a></li>
                        <li>a little web game called <a href="https://theonlyghostwolf.itch.io/satans-pepper" target="_blank">Satan{`'`}s Pepper</a> - as featured on <a href="https://www.youtube.com/watch?v=HQtk2Jey1_M" target="_blank">let{`'`}s player{`'`}s ManlyBadassHero channel</a></li>
                        <li>Discord bots! <a href="https://github.com/pauleks/jermacaption" target="_blank">Caption It Jerma!</a>, an on-request GIF generation tool, dedicated to an internet personality Jerma985 that also utilizes ffmpeg, and <a href="https://github.com/pauleks/uwutranslator" target="_blank">uwutranslator</a>, the latter being my very first JavaScript project and also running on serverless platform</li>
                        <li>and all of my other projects can be found on <a href="https://github.com/pauleks" target="_blank" rel="noopener noreferrer">my main GitHub profile</a> and <a href="https://github.com/pauleksarchive" target="_blank" rel="noopener noreferrer">my archived projects org</a></li>
                    </ul>
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
