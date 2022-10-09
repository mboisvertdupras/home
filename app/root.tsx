import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from './styles/app.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Marc Boisvert-Dupras",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full bg-sage-100">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Navigation />
        <main className="relative mx-4 max-w-3xl pt-28 pb-16 text-sage-800 sm:mx-auto sm:pt-36">
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
