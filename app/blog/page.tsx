import { BlogPosts } from 'app/components/posts'

export const metadata = {
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="mt-8">
      <BlogPosts />
    </section>
  )
}
