import { ReactElement } from "react";

import { Link } from "@remix-run/react";

import { rechnerRoutes } from "~/lib/routes/naviUrls";

export const Navigation = (): ReactElement => {
  const linkClass = "py-2 inline-block text-teal-800 hover:text-teal-600";
  const menu = rechnerRoutes
    .toSorted((a, b) => a.weight - b.weight)
    .map((route) => (
      <li key={route.slug}>
        <Link className={linkClass} to={`/${route.slug}`} title={route.title}>
          {route.title}
        </Link>
      </li>
    ));
  return (
    <nav>
      <ul className="list-none">
        {menu}
        <hr className="my-4 border-t border-black opacity-50" />
        {/*  <li>*/}
        {/*    <Link to="/example-rechner-layout" className={linkClass}>*/}
        {/*      Example rechner layout*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <hr className="border-red-500 border-t-2 my-4" />*/}

        {/*  <li>*/}
        {/*    <Link to="/example-second-layout" className={linkClass}>*/}
        {/*      Example second layout*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <hr className="border-black border-t opacity-50 my-4" />*/}
      </ul>
    </nav>
  );
};
