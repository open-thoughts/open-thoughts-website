import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  }
}

function ArrowIcon() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}


export function Navbar() {
  return (
    <aside className="-ml-[8px] tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-400 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
            <Link
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-400 flex align-middle relative py-1 px-2 m-1 items-center"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/open-thoughts/open-thoughts"
          >
            <ArrowIcon  />
            <p className="ml-2 h-7">github</p>
          </Link>
          <Link
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-400 flex align-middle relative py-1 px-2 m-1 items-center"
            rel="noopener noreferrer"
            target="_blank"
            href="https://huggingface.co/open-thoughts"
          >
            <ArrowIcon  />
            <p className="ml-2 h-7">huggingface</p>
          </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}
