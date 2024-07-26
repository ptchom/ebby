import { ReactElement, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "@remix-run/react";

import { rechnerRoutes } from "~/lib/routes/naviUrls";

export const BurgerMenu = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
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
    <div className="relative md:hidden">
      <button
        className="text-teal-800 transition-transform hover:scale-110 hover:text-teal-600"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute right-10 top-0 z-[1000] mt-2 border border-teal-800 bg-white/95 p-2 shadow-lg md:p-5`}
      >
        <ul className="list-none">{menu}</ul>
      </nav>
    </div>
  );
};
