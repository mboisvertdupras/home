export default function Blog() {
  return (
    <>
      <h1 className="mt-3 font-display text-4xl sm:text-8xl">Blog</h1>
      <div className="prose text-lg">
        <p className="mt-6 text-2xl text-sage-500">
          Thoughts and ideas about software development.
        </p>
        <ul className="my-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* <template x-for="(project, i) in projects">
            <a
              className="group relative block"
              rel="noopener noreferrer"
              href="project.url"
              target="project.is_external ? '_blank' : '_self'"
              style={`transition-delay: ${i * 150}ms`}
              x-show="loaded"
              x-transition:enter="transition ease-out duration-300"
              x-transition:enter-start="opacity-0 transform scale-95"
              x-transition:enter-end="opacity-100 transform scale-100"
              x-transition:leave="transition ease-in duration-300"
              x-transition:leave-start="opacity-100 transform scale-100"
              x-transition:leave-end="opacity-0 transform scale-95"
            >
              <li className="flex rounded-xl bg-sage-300 p-8 transition group-hover:cursor-pointer group-hover:bg-sage-200">
                <div className="w-full">
                  <h3
                    className="text-xl font-medium"
                    x-text="project.title"
                  ></h3>
                  <div className="my-2" x-html="project.description"></div>
                </div>
                <template x-if="project.is_external">
                  <span className="absolute top-6 right-6">
                    <svg className="h-6 w-6" viewBox="0 0 15 15">
                      <path
                        className="fill-sage-500"
                        fillRule="evenodd"
                        d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1H3Zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.499.499 0 0 1 .354.146Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </template>
              </li>
            </a>
          </template> */}
        </ul>
      </div>
    </>
  );
}
