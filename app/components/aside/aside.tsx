import { ReactElement } from "react";
import { Navigation } from "./navigation";
import { ImAufbau } from "~/components/aside/im-aufbau";
import { GaBlockUno } from "~/utils/adsense/GaBlock-Uno";

export const Aside = (): ReactElement => {
  return (
    <>
      <Navigation />
      <ImAufbau />
      <hr className="border-black border-t opacity-50 my-4" />
      <GaBlockUno />
    </>
  );
};
