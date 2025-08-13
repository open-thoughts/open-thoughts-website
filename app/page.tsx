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

      <pre className="bg-gray-100 p-4 rounded text-xs overflow-x-auto">
{`@misc{guha2025openthoughtsdatarecipesreasoning,
  title={OpenThoughts: Data Recipes for Reasoning Models}, 
  author={Etash Guha and Ryan Marten and Sedrick Keh and Negin Raoof and Georgios Smyrnis and Hritik Bansal and Marianna Nezhurina and Jean Mercat and Trung Vu and Zayne Sprague and Ashima Suvarna and Benjamin Feuer and Liangyu Chen and Zaid Khan and Eric Frankel and Sachin Grover and Caroline Choi and Niklas Muennighoff and Shiye Su and Wanjia Zhao and John Yang and Shreyas Pimpalgaonkar and Kartik Sharma and Charlie Cheng-Jie Ji and Yichuan Deng and Sarah Pratt and Vivek Ramanujan and Jon Saad-Falcon and Jeffrey Li and Achal Dave and Alon Albalak and Kushal Arora and Blake Wulfe and Chinmay Hegde and Greg Durrett and Sewoong Oh and Mohit Bansal and Saadia Gabriel and Aditya Grover and Kai-Wei Chang and Vaishaal Shankar and Aaron Gokaslan and Mike A. Merrill and Tatsunori Hashimoto and Yejin Choi and Jenia Jitsev and Reinhard Heckel and Maheswaran Sathiamoorthy and Alexandros G. Dimakis and Ludwig Schmidt},
  year={2025},
  eprint={2506.04178},
  archivePrefix={arXiv},
  primaryClass={cs.LG},
  url={https://arxiv.org/abs/2506.04178}, 
}`}
      </pre>

      <div className="mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-8">
        <MailchimpForm />
      </div>
    </section>
  )
}
