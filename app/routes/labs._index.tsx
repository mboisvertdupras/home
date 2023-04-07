import { Link, useLoaderData } from "@remix-run/react";
import { client } from "graphql/client";
import { gql } from "@apollo/client";

import PublicError from "~/components/PublicError";

type Tech = {
    name: string;
};

type Post = {
    title: string;
    slug: string;
    projectSettings: {
        externalUrl: string;
        description: string;
    }
    technologies: {
        nodes: Tech[];
    }
};

const POSTS_QUERY = gql`
  {
    projects {
        nodes {
          title
          slug
          projectSettings {
            externalUrl
            description
          }
          technologies {
            nodes {
                name
            }
          }
        }
      }
  }
`;

export function ErrorBoundary({ error }) {
  return <PublicError error={error} />;
}

export const loader = async () => {
  const res = await client.query({
    query: POSTS_QUERY,
  });

  return res;
};

export default function Posts() {
  const { data } = useLoaderData();
  const posts = data?.projects.nodes;

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mt-3 font-display text-4xl sm:text-8xl">Labs</h1>
      <p className="mt-6 text-2xl text-sage-500">
        Here be dragons. These are my experiments, my playground, my sandbox.
      </p>
      <ul className="my-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {posts.map((post: Post) => (
          <a
            key={post.title}
            className="group relative block"
            href={post.projectSettings.externalUrl ?? `/labs/${post.slug}`}
            target={post.projectSettings.externalUrl ? '_blank' : '_self'}
            rel="noreferrer"
          >
            <li className="flex rounded-xl bg-sage-200 p-8 transition group-hover:cursor-pointer group-hover:bg-sage-150">
              <div className="w-full">
                {post.projectSettings.externalUrl && (
                    <span className="absolute top-6 right-6">
                        <svg className="w-6 h-6" viewBox="0 0 15 15"><path className="fill-sage-500" fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1H3Zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.499.499 0 0 1 .354.146Z" clip-rule="evenodd"/></svg>
                    </span>
                )}
                <h3 className="text-xl font-medium">{post.title}</h3>
                <p>{post.projectSettings.description}</p>
                <hr className="my-4 border-sage-300" />
                <div className="flex flex-wrap -m-1">
                  {post.technologies?.nodes
                    .map((tech: Tech) => (
                      <span key={tech.name} className="m-1 py-1 px-3 rounded-full text-xs uppercase tracking-wider text-sage-500 font-medium bg-sage-400">
                        {tech.name}
                      </span>
                    ))}
                </div>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
