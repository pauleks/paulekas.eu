import Head from "next/head";
import styles from "../styles/Home.module.css";
import ExtLink from "../components/ExtLink";
import Section from "../components/Section";
import Project from "../components/Project";
import Music from "../components/Music";
import { useState, useEffect } from "react";

const Home = () => {
  const [introductionPlace, setIntroductionPlace] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [animatedHeader, setAnimatedHeader] = useState("");
  const introduction = [
    { name: "Paulius", description: "That's my real name!" },
    { name: "ghostwolf", description: "My online alias" },
  ];

  const timeOffset = 2;
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
            ? time.getUTCHours() + timeOffset
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
          <ExtLink href="https://linkedin.com/in/pauliusgecas">
            LinkedIn
          </ExtLink>
          <ExtLink href="mailto:hi@paulekas.eu">Email me!</ExtLink>
        </div>
      </div>

      <Section sectionName="about me">
        <p>
          I am a 19-year-old graduate of the{" "}
          <ExtLink href="https://ktug.lt/">
            Kaunas University of Technology Gymnasium
          </ExtLink>{" "}
          (2020 - 2022) and a Software Engineering student at{" "}
          <ExtLink href="https://en.ktu.edu/">
            Kaunas University of Technology
          </ExtLink>{" "}
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
          university course and interests may change things. I am also working on a few projects that I hope to share soon!
        </p>
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
          , therefore it is <b>{currentTime}</b> for me.
        </p>
        <p>
          Feel free to write me an email at{" "}
          <ExtLink href="mailto:hi@paulekas.eu">hi@paulekas.eu</ExtLink>.
        </p>
        <p>
          Check out my{" "}
          <ExtLink href="https://linkedin.com/in/pauliusgecas">
            LinkedIn
          </ExtLink>{" "}
          and my{" "}
          <ExtLink href="https://github.com/TheOnlyGhostwolf">Github</ExtLink>{" "}
          too!
        </p>
      </Section>

      <Music />
    </>
  );
};

export default Home;
