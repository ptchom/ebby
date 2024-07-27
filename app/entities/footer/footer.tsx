import { ReactElement } from "react";

import { Link } from "@remix-run/react";

export const Footer = (): ReactElement => {
  return (
    <p className="text-center text-lg">
      <Link to="/impressum" className="footerLink">
        Impressum
      </Link>
    </p>
  );
};
