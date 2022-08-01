import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ExtLink from "../components/ExtLink";
import Section from "../components/Section";
import Project from "../components/Project";
import Music from "../components/Music";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [introductionPlace, setIntroductionPlace] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [animatedHeader, setAnimatedHeader] = useState("");
  const introduction = [
    { name: "Paulius", description: "That's my real name!" },
    { name: "ghostwolf", description: "My online alias" },
  ];

  const timeOffset = 3;
  const offsetDigits = (digit: number) =>
    digit.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date(),
        hours =
          time.getUTCHours() + timeOffset < 24
            ? time.getUTCHours() + 3
            : time.getUTCHours() - 24 + timeOffset,
        minutes = time.getUTCMinutes();

      setCurrentTime(`${offsetDigits(hours)}:${offsetDigits(minutes)}`);
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedHeader(styles.hidden);
      setTimeout(() => {
        setIntroductionPlace((introductionPlace + 1) % introduction.length);
        setAnimatedHeader("");
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Head>
        <title>paulekas.eu - software engineering student</title>
      </Head>
      <div className={styles.header}>
        <div className={styles.intro}>
          <p>Hey there! I&#39;m</p>
          <h1 className={animatedHeader}>
            {introduction[introductionPlace].name}
          </h1>
          <h2 className={animatedHeader} style={{ opacity: 0.5 }}>
            {introduction[introductionPlace].description}
          </h2>
        </div>
        <div className={styles.links}>
          <ExtLink href="https://github.com/TheOnlyGhostwolf">Github</ExtLink>
          <ExtLink href="https://www.linkedin.com/in/paulius-ge%C4%8Das-925193207">
            LinkedIn
          </ExtLink>
          <ExtLink href="mailto:hi@paulekas.eu">Email me!</ExtLink>
        </div>
      </div>

      <Section sectionName="about me">
        <p>
          I&#39;m an 18 years-old{" "}
          <ExtLink href="https://ktug.lt/">
            Kaunas University of Technology Gymnasium
          </ExtLink>{" "}
          graduate from Lithuania, planning to study software engineering in the
          near future.
        </p>
        <p>
          During my free time, I like to master programming by creating various
          bigger and smaller projects (and you can find some of them below)! My
          programming language of choice is <strong>JavaScript</strong>, I
          started using it in 2020 and learned it by initially creating Discord
          bots, but nowadays, I&#39;m trying to switch over to{" "}
          <strong>
            <ExtLink href="https://www.typescriptlang.org/">TypeScript</ExtLink>
          </strong>{" "}
          as my primary choice for web development.
        </p>
        <p>I&#39;m available for hire! Feel free to contact me via email.</p>
      </Section>

      <Section sectionName="projects">
        <Project
          name="Doodled"
          description="Currently under early stages of development. A revisioned drawing game with multiplayer support, leveling system, parties and more!"
          languages={[
            "ts",
            "nextjs",
            "react",
            "prisma",
            "mongodb",
            "redis",
            "express",
            "nodejs",
            "discord",
          ]}
        />
        <Project
          name="Satan's Pepper"
          description="Weirdcore genre game jam game, with the full version coming soon. 200k views on Let's play's on Youtube!"
          languages={["js", "ps"]}
          href="https://theonlyghostwolf.itch.io/satans-pepper"
        />
        <Project
          name="Caption It Jerma!"
          description="GIF caption generator bot, dedicated to a content creator Jerma985."
          languages={["js", "discord", "nodejs"]}
          href="https://www.reddit.com/r/jerma985/comments/uplzkd/i_made_a_jermathemed_caption_bot_that_adds_your/"
        />
        <Project
          name="Snowflakes"
          description="Minigame bot, where you catch dropped snowflakes in channels."
          languages={["js", "discord", "nodejs"]}
          href="https://github.com/TheOnlyGhostwolf/snowflakes"
        />
        <Project
          name="This website! :D"
          description="You're looking at it right now!"
          languages={["ts", "react", "nextjs", "nodejs"]}
        />
      </Section>

      <Section sectionName="contact">
        <p>
          My timezone is{" "}
          <b>
            UTC+
            {timeOffset.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </b>
          , therefore it is <b>{currentTime}</b> for me
        </p>
        <p>
          Feel free to write me an email to{" "}
          <ExtLink href="mailto:hi@paulekas.eu">hi@paulekas.eu</ExtLink>
        </p>
        <p>
          Check out my{" "}
          <ExtLink href="https://www.linkedin.com/in/paulius-ge%C4%8Das-925193207">
            LinkedIn
          </ExtLink>{" "}
          and my{" "}
          <ExtLink href="https://github.com/TheOnlyGhostwolf">Github</ExtLink>{" "}
          too!
        </p>
        <p>
          You can also contact me on Discord (but this is not preferred):
          ghostwolf#5420
        </p>
      </Section>

      <Music />
    </>
  );
};

export default Home;
