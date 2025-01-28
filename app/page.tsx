import { BlogPosts } from 'app/components/posts'
import { CustomMDX } from 'app/components/mdx'
import { readMDXFile } from 'app/blog/utils'
import { BlogPosts } from 'app/components/posts'
import path from 'path'

export default async function Page() {
  const file = path.join(process.cwd(), 'app', 'intro.mdx')
  const { metadata, content } = readMDXFile(file)

  return (
    <section>
      <article className="prose">
        <CustomMDX source={content} />
      </article>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
