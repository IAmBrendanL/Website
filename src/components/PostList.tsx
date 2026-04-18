import styles from "../styles/PostList.module.css"
import type { PostMeta } from "@/utils/posts"

type Props = {
  posts: PostMeta[]
}

export default function PostList({ posts }: Props) {
  return (
    <div className={styles.postList}>
      <div className={styles.column}>
        {posts.map((post) => (
          <div key={post.slug} className={styles.postItem}>
            <a className={styles.postLink} href={`/posts/${post.slug}`}>
              {post.title}
            </a>
            <div className={styles.postDate}>{post.formattedDate}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
