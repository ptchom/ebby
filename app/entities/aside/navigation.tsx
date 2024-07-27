import { ReactElement } from "react";

import { Menu } from "~/entities/menu/menu";

export const Navigation = (): ReactElement => {
  return (
    <nav>
      <ul className="list-none text-xl font-semibold">
        <Menu />
        <hr className="my-4 border-t border-black opacity-50" />
      </ul>
    </nav>
  );
};
