import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { Header } from "~/components/header";
import { Aside } from "~/components/aside";
import { Footer } from "~/components/footer";
import { googleTagManager } from "~/shared/config";

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
      </head>
      <body>
        <header className="col-span-12 xl:col-start-3 xl:col-span-8">
          <Header />
        </header>
        <aside className="hidden md:block md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-4 xl:col-start-2 xl:col-end-4">
          <Aside />
        </aside>
        <main className="md:col-start-4 md:col-span-9 xl:col-start-4 xl:col-end-12">
          {children}
        </main>
        <footer className="col-start-1 col-end-13 xl:col-start-3 xl:col-end-11 bg-bg-footer bg-svg-pattern-footer text-white rounded-lg">
          <Footer />
        </footer>
        <ScrollRestoration />
        <Scripts />
        {
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleTagManager}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${googleTagManager}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        }
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
