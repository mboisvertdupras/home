import { useLoaderData } from "@remix-run/react";
import { client } from "graphql/client";
import { gql } from "@apollo/client";
import dayjs from "dayjs";

import PublicError from "~/components/PublicError";

type Category = {
    name: string;
}

export function ErrorBoundary({ error }) {
  return (
    <div className="mx-auto max-w-3xl">
      <PublicError error={error} />
    </div>
  );
}

export const loader = async ({ params }) => {
  const res = await client.query({
    query: gql`{
        post(id: "${params.slug}", idType: SLUG) {
            title
            content
            date
            featuredImage {
                node {
                    id
                    caption(format: RAW)
                    srcSet
                    sourceUrl
                }
            }
            categories {
                nodes {
                    name
                }
            }
        }
    }
    `,
  });

  return res;
};

export default function Post() {
  const { data } = useLoaderData();
  const post = data?.post;

  return (
    <article>
      {post.featuredImage && (
        <img
          className="mx-auto mb-12 w-full max-w-7xl"
          src={post.featuredImage.node.sourceUrl}
          srcSet={post.featuredImage.node.srcSet}
          alt={post.featuredImage.node.caption}
        />
      )}
      <div className="mx-auto max-w-3xl">
        <div className="mb-2 text-xs uppercase tracking-wide text-sage-500">
          {dayjs(post.date).format("MMMM DD, YYYY")} /{" "}
          {post.categories.nodes
            .map((category: Category) => (
              <span key={category.name} className="font-medium">
                {category.name}
              </span>
            ))
            .reduce((prev, curr) => [prev, ", ", curr])}
        </div>
        <h1 className="mt-3 mb-10 font-display text-4xl sm:text-7xl">
          {post.title}
        </h1>
        <div
          className="prose text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </article>
  );
}
