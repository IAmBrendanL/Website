import Head from "next/head"
import styles from "@/styles/Home.module.css"
import NavBar from "@/components/NavBar"
import PostList from "@/components/PostList"
import { GetStaticProps } from "next"
import { getAllPostMetas, PostMeta } from "@/utils/posts"

type Props = {
  posts: PostMeta[]
}

export default function Home({ posts }: Props) {
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
      <main className={styles.main}>
        <div className={styles.contentColumn}>
          <h1 className={styles.title}>Brendan Lindsey</h1>
          <NavBar />
          <PostList posts={posts} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPostMetas()
  return { props: { posts } }
}
