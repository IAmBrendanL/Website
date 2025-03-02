import Head from "next/head"
import styles from "@/styles/Home.module.css"
import NavBar from "@/components/NavBar"

export default function Post2() {
  return (
    <>
      <Head>
        <title>Website Progress</title>
        <meta
          name="description"
          content="Updates on the progress of my website development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.contentColumn}>
          <h1 className={styles.title}>Brendan Lindsey</h1>
          <NavBar />

          <article>
            <h1>Website Progress</h1>
            <time dateTime="2024-08-07" className={styles.postDate}>
              August 7, 2024
            </time>

            <p>
              {`It's been almost a year, but I think that with the small amount of
              additional development I've finally got a decent starting point for this website. There's
              always more to do but I'm happy with the progress I've made.`}
            </p>

            <p>
              {`There's still got a lot more that I want to do. Like make the posts list somehow show a preview of what I've wrote.... I
              may just take the easy route and add a \`const Summary = \`\` to each file that a post lives in.`}
            </p>

            <p>
              {`I decided to make the posts full components/pages so I can maintain the maximum amount of customization as I'm not certain what I want to put in the pages yet.`}{" "}
              I <i>could</i> come to regret this later but {`we'll`} see.
            </p>

            <p>
              If you look at the source code for this page on github please
              excuse the weird formatting, {`I'm`} trying to figure out the
              fastest way to handle apostrophes.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
