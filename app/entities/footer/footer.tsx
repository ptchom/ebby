import { ReactElement } from "react";

import { Link } from "@remix-run/react";

export const Footer = (): ReactElement => {
  return (
    <p className="text-center">
      <Link
        to="/impressum"
        className="text-3xl text-white underline transition-colors hover:text-gray-300 active:text-gray-500"
      >
        Impressum
      </Link>
    </p>
  );
};
