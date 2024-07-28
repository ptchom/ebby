import { ReactElement } from "react";

import { ImAufbau } from "~/entities/aside/im-aufbau";

import { GaBlockUno } from "~/shared/adsense/ga-block-uno";

import { Navigation } from "./navigation";

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
