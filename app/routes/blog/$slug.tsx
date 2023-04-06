import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { client } from "graphql/client";
import { gql } from "@apollo/client";
import dayjs from "dayjs";
import { decode } from "html-entities";
import type { DynamicLinksFunction } from "remix-utils";

type Category = {
    name: string;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return {
      title: "Oops!",
      description: "Post not found",
    };
  }

  return {
    title: `${data.data.post.seoTitle} | Marc Boisvert-Dupras`,
    description: decode(data.data.post.seoDescription)
  };
};

const dynamicLinks: DynamicLinksFunction<typeof loader> = ({ data }) => {
  console.log(data)
  return [
    {
      rel: 'canonical', href: data.data.post.seoCanonical,
    },
  ];
}

export const handle = {
  dynamicLinks,
};


export const loader = async ({ params }) => {
  const res = await client.query({
    query: gql`{
        post(id: "${params.slug}", idType: SLUG) {
            title
            content
            date
            seoTitle
            seoDescription
            seoCanonical
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
      <div className="mx-auto max-w-3xl">
        <div className="mb-2 text-xs uppercase tracking-wide text-sage-500">
          {dayjs(post.date).format("MMMM DD, YYYY")} /{" "}
          {post.categories.nodes
            .map((category: Category) => (
              <span key={category.name} className="font-medium">
                {category.name}
              </span>
            ))
            .reduce((prev: Category, curr: Category) => [prev, ", ", curr])}
        </div>
        <h1 className="mt-3 font-display text-4xl sm:text-7xl">
          {post.title}
        </h1>
      </div>
      {post.featuredImage && (
        <div className="relative mx-auto my-16 max-w-7xl">
          <img
            className="w-full"
            src={post.featuredImage.node.sourceUrl}
            srcSet={post.featuredImage.node.srcSet}
            alt={post.featuredImage.node.caption}
          />
        </div>
      )}
      <div className="mx-auto max-w-3xl">
        <div
          className="prose text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </article>
  );
}
