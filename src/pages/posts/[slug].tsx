import Head from "next/head"
import styles from "@/styles/Home.module.css"
import NavBar from "@/components/NavBar"
import { GetStaticPaths, GetStaticProps } from "next"
import { getMarkdownSlugs, getMarkdownPostData, PostData } from "@/utils/posts"

type Props = {
  post: PostData
}

export default function MarkdownPost({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.contentColumn}>
          <h1 className={styles.title}>Brendan Lindsey</h1>
          <NavBar />
          <article className={styles.markdownArticle}>
            <h1>{post.title}</h1>
            <time dateTime={post.date} className={styles.postDate}>
              {post.formattedDate}
            </time>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </article>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getMarkdownSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string
  const post = await getMarkdownPostData(slug)
  return { props: { post } }
}
