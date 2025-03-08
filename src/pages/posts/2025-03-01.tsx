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
              making a smarter autocomplete. Even by just providing better
              autocomplete, Copilot only needed to save you a fraction of an
              hour to have a positive ROI at the current price. However, I
              recently started using Copilot Edits and while there are still a
              lot of rough edges, does a decent job of scaffolding new features.
            </p>
            <p>
              I&apos;ve also been trying out Cursor for personal projects.
              Cursor seems like a more complete product and the edit/review
              features are nicer to work with. The code was also significantly
              better in Cursor, but I think some of that is the result of having
              Claude 3.7 Sonnet available. Copilot has also has 3.7 available
              but I haven&apos;t evaluated it because of compliance concerns.
              The perceived benefit of going with a product from a more
              established company like Github/Microsoft still outweighs the
              slight edge of Cursor when taking into account compliance and
              privacy concerns.
            </p>
            <p>
              Both Cursor and Copilot Edits currently output junior level code
              and as such, the output requires exercising code review skills. I
              expect that newer models will reduce the error rates I find in the
              output. However, I believe code review and being able to reasoning
              about the implications of code changes will be the most important
              skills for software engineers going forward.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
