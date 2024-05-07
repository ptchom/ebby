import { ReactElement } from "react";
import { Link } from "@remix-run/react";

export const Header = (): ReactElement => {
  return (
    <>
      <h1 className="text-teal-800 py-5 text-center font-bold">
        <Link
          className="underline hover:text-teal-500 active:text-teal-900"
          to="/"
          title="http://eb.by"
        >
          EB.BY
        </Link>{" "}
        - online rechner für jeden Geschmack
      </h1>
    </>
  );
};
