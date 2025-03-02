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
              I&apos;m a software engineer with a passion for building good
              software. I enjoy the process of building new things and get
              satisfaction from seeing the work I&apos;ve done work well. I
              currently lead the development team at a digital mental health
              startup. My main focus is iOS and React Native, but I am still the
              main contributor to most of our products outside of Android.
            </p>
            <p>
              Outside of my development work, I manage and try to mentor one
              direct report as well as fill in some gaps with Product & Project
              Management. I&apos;m a firm believer that the hardest part about
              software is in <u>building consensus</u> about <i>what</i> to
              build rather than building it. That&apos;s currently a large part
              of what I do. It&apos;s been the classic startup story where I
              keep getting more and more responsibilities.
            </p>
            <p>
              Outside of work, most of my time is spent with my wife and kids.
              We enjoy a whole host of outdoor activities, playing games of all
              kinds, and trying out new coffee shops.
            </p>
            {/* <h3>Some of the Hats I&apos;ve worn or am wearing:</h3>
            <ul className={styles.hatList}>{hatListItems}</ul> */}

            <h2>About This Site</h2>
            <p>
              This site is supposed to be part blog part whatever I&apos;m in
              the mood for. It&apos;s set up as a Next.js static site and hosted
              on GitHub Pages so I can keep it simple while leaving the door
              open to adding more dynamic content in the future. Plus, I
              generally like the design philosophy of React.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
