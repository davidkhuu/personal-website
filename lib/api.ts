import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  const postDirs = fs.readdirSync(postsDirectory)

  type Slugs = {
    [key: string]: string[]
  }

  const postSlugs: Slugs = {}
  postDirs.forEach((category) => {
    postSlugs[category] = fs.readdirSync(join(postsDirectory, category))
  })

  return postSlugs
}

type Items = {
  [key: string]: string
}

export function getPostBySlug(category: string, slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, category, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items.category = category
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  let posts: Items[] = []
  for (const [category, postSlugs] of Object.entries(slugs)) {
    posts = posts.concat(
      postSlugs.map((slug => getPostBySlug(category, slug, fields)))
    )
  }
  // sort posts by date in descending order
  posts = posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
