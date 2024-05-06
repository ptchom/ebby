import { ReactElement } from "react";
import { Link } from "@remix-run/react";
import { rechnerRoutes } from "~/shared/lib/naviUrls";

export const Navigation = (): ReactElement => {
  const linkClass = "py-2 inline-block text-blue-500 hover:text-blue-800";
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
      <ul>
        {menu}
        <hr className="border-black border-t opacity-50 my-4" />
        <li>
          <Link to="/example-rechner-layout" className={linkClass}>
            Example rechner layout
          </Link>
        </li>
        <hr className="border-red-500 border-t-2 my-4" />
        <li>
          <Link to="/example-second-layout" className={linkClass}>
            Example second layout
          </Link>
        </li>
        <hr className="border-black border-t opacity-50 my-4" />{" "}
        <li>
          <Link to="/contact" className={linkClass}>
            contact
          </Link>
        </li>
        <hr className="border-black border-t opacity-50 my-4" />
      </ul>
    </nav>
  );
};
