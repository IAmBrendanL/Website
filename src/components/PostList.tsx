import styles from "../styles/PostList.module.css"

/// Displays a list of posts
export default function PostList() {
  let slugs = ["2024-08-07", "2024-02-19"]
  return (
    <div className={styles.postList}>
      <h2 className={styles.center}>Posts:</h2>
      <div className={styles.column}>
        {slugs.map((slug) => {
          return (
            <a className={styles.postLink} key={slug} href={`/posts/${slug}`}>
              <span>{slug}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

/* Old code from an attempt to make this dynamic */

// import fs from "fs"
// import path from "path"

/* This gives a run time error during development because fs is a Node.js module
   but since I'm building a static site it not an actual problem. If I have time
   later I'll see if I can find a different solution because it _is_ annoying.
*/
// nvm apparently the static site generation doesn't strip this out
/*
const postsDirectory = path.join(process.cwd(), "src/pages/posts")

/// Get the list of post slugs
export function getPostSlugs() {
  let rawFileNames = fs.readdirSync(postsDirectory)
  return rawFileNames.map((fileName) => {
    return fileName.replace(/\.tsx$/, "")
  })
}

/// Display the list of posts
function PostList() {
  let slugs = getPostSlugs()
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {slugs.map((slug) => {
          return (
            <li key={slug}>
              <a href={`/posts/${slug}`}>
                <span>{slug}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
*/
