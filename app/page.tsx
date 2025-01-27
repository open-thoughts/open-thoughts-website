import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Open Thoughts Project 
      </h1>
      <p className="mb-4">
        {`The Open Thoughts project is curating the best open reasoning datasets. We are building in the open and are continuously releasing improved models, data, and data generation code.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
