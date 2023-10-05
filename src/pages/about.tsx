import Head from "next/head"
import styles from "@/styles/Home.module.css"
import NavBar from "@/components/NavBar"
import { hats } from "@/utils/data"

export default function Home() {
  const hatListItems = (() => {
    console.log(hats.length)
    const hatsLocalCopy = [...hats]
    return hatsLocalCopy.map((position, idx) => {
      return (
        <li key={`positionList${idx}`} className={styles.listItem}>
          <text
            className={styles.code}
            style={{ fontSize: 20, marginBottom: 20 }}
          >
            {position}
          </text>
        </li>
      )
    })
  })()

  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="A place where I put things into the void"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.columnContainer}>
        <div className={styles.column}>
          <text
            className={styles.title}
            style={{ fontSize: 40, marginTop: 20 }}
          >
            About Me
          </text>
          <text
            className={styles.code}
            style={{ fontSize: 20, marginBottom: 20 }}
          >
            I&apos;m a software engineer currently focusing on mobile app
            development (iOS Native + React Native). I&apos;ve got a lot of
            breadth in my professional experience: sql, python, svelte, react,
            flask, Native iOS, Android, UIKit, React Native, HTML/CSS, Graphql,
            noSQL, AWS, Azure, Docker, basic DevOps, Linux Systems
            Administration, word salad, alphabet soup, & jargon pie. Before
            finishing my degree I spent four years as a student employee
            providing end-user support During my final year of university I
            spent also assisted in managing 20 student employees. Due to my tech
            support experience I&apos;ve often ended up as the backup for our
            main IT person in small teams.
          </text>
          <text
            className={styles.code}
            style={{ fontSize: 20, marginBottom: 20 }}
          >
            I enjoy reading, biking, hiking, gaming, cooking, and spending time
            with my friends and family.
          </text>
          <text
            className={styles.code}
            style={{ fontSize: 20, marginBottom: 40 }}
          >
            I&apos;m currently working at a digital mental health start up which
            has provided many opportunities for professional development.
          </text>
          <text
            className={styles.title}
            style={{ fontSize: 30, marginBottom: 10 }}
          >
            Some of the Hats I&apos;ve worn or am wearing
          </text>
          <ul style={{ marginBottom: 40 }}>{[...hatListItems]}</ul>
          <text className={styles.title} style={{ fontSize: 40 }}>
            About This Site
          </text>
          <text className={styles.code} style={{ fontSize: 20 }}>
            This site is supposed to be part blog part whatever I&apos;m in the
            mood for. It&apos;s set up as a Next.js static site and hosted on
            GitHub Pages.
          </text>
        </div>
      </div>
    </>
  )
}
