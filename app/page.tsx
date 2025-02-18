import { BlogPosts } from 'app/components/posts'
import { CustomMDX } from 'app/components/mdx'
import { readMDXFile } from 'app/blog/utils'
import { MailchimpForm } from 'app/components/MailchimpForm'
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
      <div className="mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-8">
        <MailchimpForm />
      </div>
    </section>
  )
}
