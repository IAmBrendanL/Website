import Head from "next/head"
import styles from "@/styles/Home.module.css"
import NavBar from "@/components/NavBar"

export default function Post1() {
  return (
    <>
      <Head>
        <title>Thoughts on Building This Site</title>
        <meta
          name="description"
          content="Thoughts on why I built this site with React and Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.contentColumn}>
          <h1 className={styles.title}>Brendan Lindsey</h1>
          <NavBar />

          <article>
            <h1>Thoughts on Building This Site</h1>
            <time dateTime="2024-02-19" className={styles.postDate}>
              February 19, 2024
            </time>

            <h2>
              Thoughts on why I built this site with React and Next.js vs
              another stack or plain ole HTML/CSS.
            </h2>
            <p>
              I&apos;m used to React from my day job so writing in another
              framework didn&apos;t really make sense to me. I could have spent
              some time to actually learn Vue.js or Svelte but that would have
              taken time away from{" "}
              <i>
                <u>actually doing the thing</u>
              </i>
              .
            </p>
            <hr />
            <h2>Getting stuff done vs Just thinking about doing it.</h2>
            <p>
              TL;DR Better to have something than just think about it. Even if
              what
              {`you've`} made is crappy you still made it.
            </p>
            <p>
              This is something I&apos;ve historically struggled with. I came to
              the conclusion that I needed to at least write stuff down in my
              senior year of college. It&apos;s helped, but I still haven&apos;t
              really produced much of what I wanted to produce. Part of that is
              because of perfectionist tendencies that I need to learn how to
              relax in specific contexts (I should still keep them when writing
              critical code though). Part of it is <u>organization</u>.
              I&apos;ve been putting things down in too many places. Physical
              journals, Notion, text files, git repos, two different note apps.
              I&apos;m still working on this part but I think that trying to do
              more on my laptop, using folders, and aiming for the simplest file
              types will help.
            </p>
            <p>
              I went to paper as a reaction to using technology too much.
              I&apos;ve found a better balance since that point and I believe
              that replacing smartphone use with laptop use will suffice.
              Smartphones, particularly iOS devices, are too limiting when it
              comes to creation. As a result, I personally tend to fall back
              into consumption.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
