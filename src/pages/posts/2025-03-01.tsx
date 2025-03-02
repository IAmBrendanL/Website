import Head from "next/head"
import styles from "@/styles/Home.module.css"
import NavBar from "@/components/NavBar"

export default function Post3() {
  return (
    <>
      <Head>
        <title>Thoughts on AI/LLMs Tools in Software Development</title>
        <meta
          name="description"
          content="Thoughts on how AI/LLMs are impacting my work in software development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.contentColumn}>
          <h1 className={styles.title}>Brendan Lindsey</h1>
          <NavBar />

          <article>
            <h1>Thoughts on AI/LLMs Tools in Software Development</h1>
            <time dateTime="2025-03-01" className={styles.postDate}>
              March 1, 2025
            </time>
            <p>
              I&apos;ve been using ChatGPT and Copilot at work for a while now.
              ChatGPT has been a great tool for rubber-ducking questions and
              surfacing obscure Azure documentation. Copilot has been helpful in
              making a smarter autocomplete, but that&apos;s been about it. At
              the current price though, it only needs to save you a fraction of
              an hour to have a positive ROI.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
