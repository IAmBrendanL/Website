import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  formattedDate: string
  isMarkdown: boolean
}

export type PostData = PostMeta & {
  contentHtml: string
}

// Pre-computed legacy .tsx posts — keeps PostList.tsx free of hardcoded data
export const LEGACY_POSTS: PostMeta[] = [
  {
    slug: "2025-03-01",
    title: "Thoughts on AI/LLMs Tools in Software Development",
    description:
      "Thoughts on how AI/LLMs are impacting my work in software development",
    date: "2025-03-01",
    formattedDate: "March 1, 2025",
    isMarkdown: false,
  },
  {
    slug: "2024-08-07",
    title: "Website Progress",
    description: "Updates on the progress of my website",
    date: "2024-08-07",
    formattedDate: "August 7, 2024",
    isMarkdown: false,
  },
  {
    slug: "2024-02-19",
    title: "Build Something – Anything",
    description: "Why I built this site",
    date: "2024-02-19",
    formattedDate: "February 19, 2024",
    isMarkdown: false,
  },
]

const postsDirectory = path.join(process.cwd(), "content", "posts")

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}

function getMarkdownPostMetas(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)
      const date: string = data.date ?? slug

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date,
        formattedDate: formatDate(date),
        isMarkdown: true,
      }
    })
}

export function getAllPostMetas(): PostMeta[] {
  const markdownMetas = getMarkdownPostMetas()
  const all = [...LEGACY_POSTS, ...markdownMetas]
  return all.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
}

export function getMarkdownSlugs(): string[] {
  return getMarkdownPostMetas().map((p) => p.slug)
}

export async function getMarkdownPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const date: string = data.date ?? slug

  const processedContent = await remark().use(remarkHtml).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date,
    formattedDate: formatDate(date),
    isMarkdown: true,
    contentHtml,
  }
}
