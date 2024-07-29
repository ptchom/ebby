import { ReactNode } from "react";

import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Aside } from "~/entities/aside";
import { Footer } from "~/entities/footer";
import { Header } from "~/entities/header";

import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6L808W37HG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}   
gtag('js', new Date());

gtag('config', 'G-6L808W37HG');
`,
          }}
        />
      </head>
      <body>
        <header className="col-span-12 xl:col-span-8 xl:col-start-3">
          <Header />
        </header>
        <aside className="hidden md:col-start-1 md:col-end-4 md:block lg:col-start-1 lg:col-end-4 xl:col-start-2 xl:col-end-5">
          <Aside />
        </aside>
        <main className="md:col-span-9 md:col-start-4 xl:col-start-5 xl:col-end-12">
          {children}
        </main>
        <footer className="col-start-1 col-end-13 rounded-lg bg-bg-footer bg-svg-pattern-footer text-white xl:col-start-3 xl:col-end-11">
          <Footer />
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
