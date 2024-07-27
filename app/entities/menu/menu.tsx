import { FC } from "react";

import { Link } from "@remix-run/react";

import { rechnerRoutes } from "~/lib/routes/naviUrls";

export const Menu: FC = () => {
  const menu = rechnerRoutes
    .toSorted((a, b) => a.weight - b.weight)
    .map((route) => (
      <li key={route.slug}>
        <Link to={`/${route.slug}`} title={route.title} className="menuLink">
          {route.title}
        </Link>
      </li>
    ));

  return <>{menu}</>;
};
