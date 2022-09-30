import pages from '../content/pages'

const navigation = `
  <nav class="fixed top-0 w-full z-10">
    <div class="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between text-sage-500">
      <a href="/" class="relative block h-16">
        <svg class="w-auto h-full" viewBox="0 0 217 295" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 163.5V279.5H108.375M15 163.5H108.375M15 163.5V27.5L108.375 84.5L201.75 27.5V163.5M108.375 279.5V222.5M108.375 279.5H201.75V163.5M108.375 222.5H15M108.375 222.5V163.5M108.375 163.5H201.75" stroke="black" stroke-width="30"/>
        </svg>
      </a>
      <ul class="flex space-x-8">
        ${pages.map(page => `
          <li>
            <a
              href="${page.path}"
              class="
                relative
                text-lg
                font-semibold
                before:absolute
                before:-bottom-3
                before:left-1/2
                before:-translate-x-1/2
                before:w-2
                before:h-2
                before:bg-sage-400
                before:opacity-0
                before:rounded-full
                before:transition-opacity
                hover:before:opacity-100
              "
            >${page.title}</a>
          </li>
        `).join('')}
      </ul>
    </div>
  </nav>
`

export default navigation