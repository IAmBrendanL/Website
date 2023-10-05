import Head from "next/head"
import styles from "@/styles/Home.module.css"
import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="A place where I put things into the void"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <div className={styles.columnContainer}>
          <div className={styles.column}>
            <text className={styles.title} style={{ marginTop: 20 }}>
              TODO: List post or other things here (see &quot;About&quot; in the
              meantime)
            </text>
          </div>
        </div>
      </main>
    </>
  )
}
