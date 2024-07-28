import { ReactElement } from "react";

import { Link } from "@remix-run/react";

import { BurgerMenu } from "~/features/burgerMenu/burgerMenu";

export const Header = (): ReactElement => {
  return (
    <>
      <h1>
        <Link to="/" title="http://eb.by">
          EB.BY
        </Link>{" "}
        - online rechner für jeden Geschmack
      </h1>
      <BurgerMenu />
    </>
  );
};
