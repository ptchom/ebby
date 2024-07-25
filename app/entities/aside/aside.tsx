import { ReactElement } from "react";

import { Navigation } from "./navigation";

import { ImAufbau } from "~/entities/aside/im-aufbau";
import { GaBlockUno } from "~/lib/utils/adsense/ga-block-uno";

export const Aside = (): ReactElement => {
  return (
    <>
      <Navigation />
      <ImAufbau />
      <hr className="my-4 border-t border-black opacity-50" />
      <GaBlockUno />
    </>
  );
};
