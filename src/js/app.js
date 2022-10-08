import navigation from './components/navigation'
import footer from './components/footer'
import projects from './content/projects'

export default () => ({
  loaded: false,
  
  navigation,

  footer,

  projects,

  mainClasses: 'relative max-w-3xl mx-4 sm:mx-auto pt-28 pb-16 sm:pt-36 text-sage-800',

  tools: [
    {
      name: "JavaScript",
      slug: "javascript",
    },
    {
      name: "TypeScript",
      slug: "typescript",
    },
    {
      name: "React",
      slug: "react",
    },
    {
      name: "Vue",
      slug: "vue",
    },
    {
      name: "PHP",
      slug: "php",
    },
    {
      name: "WordPress",
      slug: "wordpress",
    },
    {
      name: "Vercel",
      slug: "vercel",
    },
    {
      name: "Cloudflare",
      slug: "cloudflare",
    },
  ],
})
