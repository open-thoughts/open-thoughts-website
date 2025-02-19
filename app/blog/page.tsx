import { BlogPosts } from 'app/components/posts'
import { MailchimpForm } from 'app/components/MailchimpForm'
export const metadata = {
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="mt-8">
      <BlogPosts />
      <div className="mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-8">
        <MailchimpForm />
      </div>
    </section>
  )
}
