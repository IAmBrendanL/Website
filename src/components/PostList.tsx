import styles from "../styles/PostList.module.css"

// Map of post slugs to titles
const postTitles: Record<string, string> = {
  "2025-03-01": "Thoughts on AI/LLMs Tools in Software Development",
  "2024-08-07": "Website Progress",
  "2024-02-19": "Thoughts on Building This Site",
}

/// Displays a list of posts
export default function PostList() {
  let slugs = ["2025-03-01", "2024-08-07", "2024-02-19"]
  return (
    <div className={styles.postList}>
      <div className={styles.column}>
        {slugs.map((slug) => {
          const title = postTitles[slug] || slug
          return (
            <a className={styles.postLink} key={slug} href={`/posts/${slug}`}>
              {title}
            </a>
          )
        })}
      </div>
    </div>
  )
}
