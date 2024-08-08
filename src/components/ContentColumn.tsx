import styles from "@/styles/Home.module.css"

/// The main content column of a page, sets a centered column with a reasonable max-width.
export default function ContentColumn({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className={styles.columnContainer}>
      <div className={styles.contentColumn}>{children}</div>
    </div>
  )
}
