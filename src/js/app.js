import navigation from './components/navigation'
import projects from './content/projects'

export default () => ({
  navigation,

  projects,

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
