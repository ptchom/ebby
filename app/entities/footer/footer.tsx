import { ReactElement } from "react";

import { Link } from "@remix-run/react";

export const Footer = (): ReactElement => {
  return (
    <p className="text-center">
      <Link
        to="/impressum"
        className="text-white underline hover:text-gray-300 active:text-gray-500 transition-colors text-3xl"
      >
        Impressum
      </Link>
    </p>
  );
};
