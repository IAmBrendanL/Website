# brendanlindsey.com

A basic website for a basic guy.

## Running

First, run the development server:

```
npm run dev
```

## Building

#### Manually

Run the npm script that builds the output folder and the exports it as a static site.

```
npm run build
```

#### Deployment

Let the workflow I set up `.github/workflows/nextjs.yaml` run on a push to main.

## Writing Blog Posts

Create a Markdown file in `content/posts/` named `YYYY-MM-DD.md`:

```markdown
---
title: "Post Title"
description: "One-sentence description for SEO"
date: "2026-04-18"
---

Post content here.
```

The filename becomes the URL slug (`/posts/2026-04-18`). The post automatically appears in the home page list, sorted newest-first. Rebuild the site to pick up the new file.

### Supported Markdown

| Element | Syntax |
|---|---|
| Headings | `## H2`, `### H3` (reserve `# H1` for the title) |
| Emphasis | `**bold**`, `*italic*` |
| Links | `[text](url)` |
| Inline code | `` `code` `` |
| Code block | ```` ```lang ```` … ```` ``` ```` |
| Blockquote | `> text` |
| Unordered list | `- item` |
| Ordered list | `1. item` |
| Horizontal rule | `---` |
| Image | `![alt](url)` |
