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
              startup. I split my time primarily between Architecture/Design, Engineering
              Management, and Mobile Development. Though I assist in just about every aspect 
              of our tech stack when needed. I&apos;m a firm believer that the hardest
              problem facing tech companies is <u>building consensus</u> about <u>what</u> to
              build.
            </p>
            <p>
              Outside of work, most of my time is spent with my wife and kids.
              We enjoy a whole host of outdoor activities, playing games of all
              kinds, and trying out new coffee shops. In my <i>copious</i> {" "} 
              free time I enjoy reading and messing around with self-hosting.
            </p>
            {/* <h3>Some of the Hats I&apos;ve worn or am wearing:</h3>
            <ul className={styles.hatList}>{hatListItems  }</ul> */}

            <h3>About This Site</h3>
            <p>
              This site is part blog part whatever-I&apos;m-in-the-mood-for. It is a Next.js static site
              currently hosted on GitHub Pages.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
