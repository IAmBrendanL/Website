import Page from "@/components/Page"
import styles from "@/styles/Home.module.css"

export default function Post2() {
  return (
    <Page>
      <h1>2024-08-07</h1>
      <p>
        {`It's been almost a year, but I think that with the small amount of
        additional development I've finally got a decent starting point. There's
        always more to do but I'm happy with the progress I've made.`}
      </p>
      <p>
        {`I've still got a lot more that I want to do. Like make the posts list somehow show a preview of what I've wrote.... I
      may just take the easy route and add a`}{" "}
        <text className={styles.code}>const Summary =``</text>{" "}
        {`to each file that a post lives in.`}
      </p>
      <p>
        {`I decided to make the posts full componets/pages so I can maintain the maximum amount of customization as I'm not certain what I want to put in the pages yet.`}{" "}
        I <i>could</i> come to regret this later but {`we'll`} see.
      </p>
      <p>
        If you look at the source code for this please excuse the weird
        formatting, {`I'm`} trying to figure out the fastest way to handle
        apostrophes.
      </p>
    </Page>
  )
}
