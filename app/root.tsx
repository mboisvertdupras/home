import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { client } from "graphql/client";
import { gql } from "@apollo/client";
import { DynamicLinks } from "remix-utils";

import styles from './styles/app.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Marc Boisvert-Dupras",
  description: "Marc Boisvert-Dupras is a web developer and designer from Montreal, Canada.",
  viewport: "width=device-width,initial-scale=1",
});

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
        <Meta />
        <DynamicLinks />
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

export function ErrorBoundary({ error }) {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>{error.message}</h1>
        <p>{error.stack}</p>
        <Scripts />
      </body>
    </html>
  );
}
