import { ReactElement } from "react";

import { Link } from "@remix-run/react";

import { BurgerMenu } from "~/features/burgerMenu/burgerMenu";

export const Header = (): ReactElement => {
  return (
    <>
      <h1>
        <Link to="/" title="http://eb.by">
          Exakte Berechnung
        </Link>{" "}
        - EB.BY
      </h1>
      <BurgerMenu />
    </>
  );
};
