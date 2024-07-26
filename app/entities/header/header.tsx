import { ReactElement } from "react";

import { Link } from "@remix-run/react";

import { BurgerMenu } from "~/entities/burgerMenu/burgerMenu";

export const Header = (): ReactElement => {
  return (
    <section className="flex items-center justify-between gap-4 p-2 md:p-4 ">
      <h1 className="text-center font-bold text-teal-800 ">
        <Link
          className="text-inherit underline hover:text-teal-500 active:text-teal-900"
          to="/"
          title="http://eb.by"
        >
          EB.BY
        </Link>{" "}
        - online rechner für jeden Geschmack
      </h1>
      <BurgerMenu />
    </section>
  );
};
