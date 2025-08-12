import Head from "next/head"
import styles from "@/styles/Home.module.css"
import NavBar from "@/components/NavBar"
import { hats } from "@/utils/data"

export default function About() {
  const hatListItems = (() => {
    console.log(hats.length)
    const hatsLocalCopy = [...hats]
    return hatsLocalCopy.map((position, idx) => {
      return (
        <li key={`positionList${idx}`} className={styles.listItem}>
          <p>{position}</p>
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
      <main className={styles.main}>
        <div className={styles.contentColumn}>
          <h1 className={styles.title}>Brendan Lindsey</h1>
          <NavBar />

          <article>
            <h2>About Me</h2>
            <p>
              I currently lead the development team at a digital mental health
              startup. I split my time between Architecture, Engineering
              Management, and Mobile Development (with a smattering of other
              development as needed). I&apos;m a firm believer that the hardest
              part of software is <u>building consensus</u> about <u>what</u> to
              build rather than building it.
            </p>
            <p>
              Outside of work, most of my time is spent with my wife and kids.
              We enjoy a whole host of outdoor activities, playing games of all
              kinds, and trying out new coffee shops. Other than that I enjoy
              reading and messing with computers when I can.
            </p>
            {/* <h3>Some of the Hats I&apos;ve worn or am wearing:</h3>
            <ul className={styles.hatList}>{hatListItems  }</ul> */}

            <h2>About This Site</h2>
            <p>
              This site is supposed to be part blog part whatever I&apos;m in
              the mood for. It is a Next.js static site hosted on GitHub Pages
              so I can keep it simple while leaving the door open to adding more
              dynamic content in the future.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
