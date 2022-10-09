export default function Index() {
  const tools = [
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
  ];

  return (
    <>
      <div className="mt-6 text-xl sm:text-3xl">
        <div className="mr-1 inline-block origin-[70%_70%] animate-wave">
          👋
        </div>{" "}
        Hey, I'm
      </div>
      <h1 className="mt-3 font-display text-4xl sm:text-8xl">
        Marc
        <br />
        Boisvert-Dupras
      </h1>
      <div className="prose text-lg">
        <p className="mt-6 text-sage-500 sm:text-2xl">
          I'm a software developer and a web enthusiast.
        </p>
        <p className="mt-10">Here are some things about me:</p>
        <ul className="mt-3 list-inside list-disc">
          <li>
            🇨🇦 I live in{" "}
            <strong className="font-semibold">Granby, QC, Canada</strong>
          </li>
          <li>
            👨‍💻 I work at{" "}
            <strong className="font-semibold">
              <a
                href="https://agencetolle.com"
                className="inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sage-500 underline">
                  Tollé, Agence Web
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="ml-1 h-5 w-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    className="stroke-sage-500"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </strong>
          </li>
          <li>
            🔥 I'm passionate about{" "}
            <strong className="font-semibold">
              edge computing, reactive JS frameworks, e-commerce & thoughtful
              UI/UX
            </strong>
          </li>
          <li>
            🐈‍⬛ I have a cat named{" "}
            <strong className="font-semibold">Onyx</strong>{" "}
            <span className="italic text-sage-500">(he's my son)</span>
          </li>
        </ul>
        <hr className="divider my-10" />
        <h2 className="text-xl font-semibold">🛠 Language & Tools</h2>
        <ul className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-5">
          {tools.map((tool) => (
            <li
              key={tool.slug}
              className="group flex items-center justify-center rounded-lg bg-sage-300 p-2 sm:rounded-xl sm:p-8"
            >
              <img
                src={`https://github.com/github/explore/raw/main/topics/${tool.slug}/${tool.slug}.png`}
                alt={tool.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
