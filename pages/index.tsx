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
          I&#39;m an 18 years-old{" "}
          <ExtLink href="https://ktug.lt/">
            Kaunas University of Technology Gymnasium
          </ExtLink>{" "}
          (2020 - 2022) graduate &{" "}
          <ExtLink href="https://en.ktu.edu/">
            Kaunas University of Technology
          </ExtLink>{" "}
          Software Engineering (2022-2026) student from Lithuania.
        </p>
        <p>
          During my free time, I like to master programming by creating various fun and
          web-based projects! My
          programming language of choice used to be <strong>JavaScript</strong>, I
          started using it in 2020 and learned it by initially creating Discord
          bots, but nowadays, I&#39;ve started using{" "}
          <strong>
            <ExtLink href="https://www.typescriptlang.org/">TypeScript</ExtLink>
          </strong>{" "}
          as my primary choice for web development.
        </p>
      </Section>

      <div style={{ opacity: 0.4 }}>
        <Section sectionName="projects">
          <p>This section will come back soon!</p>
        </Section>
      </div>

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
