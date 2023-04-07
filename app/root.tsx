import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { client } from "graphql/client";
import { gql } from "@apollo/client";
import type { V2_MetaFunction } from "@remix-run/node";

import styles from './styles/app.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: V2_MetaFunction = ({ matches }) => {
  return [
    { title: `Marc Boisvert-Dupras` },
    {
      name: 'description',
      content: 'Marc Boisvert-Dupras is a web developer and designer from Montreal, Canada.'
    },
    {
      tagName: 'link',
      rel: 'canonical',
      href: 'https://marc.boisvertdupras.com'
    },
  ];
};

export const loader = async () => {
  const res = await client.query({
    query: gql`
      {
        menu(id: "Main menu", idType: NAME) {
          menuItems {
            nodes {
              uri
              label
            }
          }
        }
      }
    `,
  });

  return res;
}

export default function App() {
  const { data } = useLoaderData();
  const menuItems = data?.menu.menuItems.nodes;

  return (
    <html lang="en" className="h-full bg-sage-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Navigation menuItems={menuItems} />
        <main className="relative mx-4 pt-28 pb-16 text-sage-800 sm:mx-auto sm:pt-30">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Footer/>
        </main>
      </body>
    </html>
  );
}
