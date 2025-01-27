import { BlogPosts } from 'app/components/posts'
import { CustomMDX } from 'app/components/mdx'
import { readMDXFile } from 'app/blog/utils'
import path from 'path'

export default async function Page() {
  const file = path.join(process.cwd(), 'app', 'intro.mdx')
  const { metadata, content } = readMDXFile(file)

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Open Thoughts Project 
      </h1>
      <div className="mb-4">
        <CustomMDX source={content} />
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
