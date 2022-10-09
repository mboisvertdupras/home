import { Link, useLoaderData } from "@remix-run/react";
import { client } from "graphql/client";
import { gql } from "@apollo/client";
import dayjs from "dayjs";

import PublicError from "~/components/PublicError";
import React from "react";

type Category = {
  node: {
    name: string;
  };
};

type Post = {
  node: {
    id: string;
    title: string;
    uri: string;
    date: string;
    categories: {
      edges: Category[];
    };
  };
};

const POSTS_QUERY = gql`
  {
    posts(first: 10, after: null) {
      edges {
        cursor
        node {
          id
          title
          uri
          date
          categories {
            edges {
              node {
                name
              }
            }
          }
        }
      }
      pageInfo {
        startCursor
        hasPreviousPage
        hasNextPage
        endCursor
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
  const posts = data?.posts.edges;

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mt-3 font-display text-4xl sm:text-8xl">Blog</h1>
      <p className="mt-6 text-2xl text-sage-500">
        Thoughts and ideas about software development.
      </p>
      <ul className="my-12 grid grid-cols-1 gap-4">
        {posts.map((post: Post) => (
          <Link
            key={post.node.id}
            className="group relative block"
            to={`/blog${post.node.uri}`}
            // style={`transition-delay: ${i * 150}ms`}
          >
            <li className="flex rounded-xl bg-sage-200 p-8 transition group-hover:cursor-pointer group-hover:bg-sage-200">
              <div className="w-full">
                <div className="mb-2 text-xs uppercase tracking-wide text-sage-500">
                  {dayjs(post.node.date).format("MMMM DD, YYYY")} /{" "}
                  {post.node.categories?.edges
                    .map<React.ReactNode>((category: Category) => (
                      <span key={category.node.name} className="font-medium">
                        {category.node.name}
                      </span>
                    ))
                    .reduce((prev, curr) => [prev, ", ", curr])}
                </div>
                <h3 className="text-xl font-medium">{post.node.title}</h3>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
