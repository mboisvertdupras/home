import { useLoaderData } from "@remix-run/react";
import { client } from "graphql/client";
import { gql } from "@apollo/client";
import dayjs from "dayjs";
import { decode } from "html-entities";
import type { LoaderArgs, LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { Response } from "@remix-run/node";

type Category = {
    name: string;
}

export const meta: V2_MetaFunction = ({ matches }) => {
  let data = matches[1].data;

  return [
    { title: `${decode(data.post.seoTitle)} | Marc Boisvert-Dupras` },
    { name: 'description', content: decode(data.post.seoDescription) },
    { tagName: 'link', rel: 'canonical', href: data.post.seoCanonical },
    { 'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          ...JSON.parse(data.post.seoLDJSON)
        ]
      }
    }
  ];
};

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  const res = await client.query({
    query: gql`{
        post(id: "${params.slug}", idType: SLUG) {
            title
            content
            date
            seoTitle
            seoDescription
            seoCanonical
            seoLDJSON
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

  if (!res.data.post) {
    throw new Response("Not found", { status: 404 });
  }

  return res.data;
};

export default function Post() {
  const { post } = useLoaderData();

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
