import { BlogPosts } from 'app/components/posts'
import { CustomMDX } from 'app/components/mdx'
import { readMDXFile } from 'app/blog/utils'
import path from 'path'

export default async function Page() {
  const file = path.join(process.cwd(), 'app', 'about', 'about.mdx')
  const { metadata, content } = readMDXFile(file)

  return (
    <section>
      <article className="prose tracking-tight">
        <CustomMDX source={content} />
      </article>
    </section>
  )
}
