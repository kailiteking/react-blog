import fs from 'fs'
import path from 'path'
// import matter from 'gray-matter'

const BlogsDirectory = path.join(process.cwd(), 'blogs')

export function getBlogsData() {
  // Get file names under /Blogs
  const fileNames = fs.readdirSync(BlogsDirectory)
  const allBlogsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(BlogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    // const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      fileContents
      // ...matterResult.data
    }
  })

  // Sort Blogs by date
  return allBlogsData
}