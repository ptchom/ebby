import { ReactElement } from "react";
import { Navigation } from "./navigation";
import { ImAufbau } from "~/components/aside/im-aufbau";

export const Aside = (): ReactElement => {
  return (
    <>
      <Navigation />
      <ImAufbau />
    </>
  );
};
