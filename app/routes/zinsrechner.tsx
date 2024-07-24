import { ReactElement } from "react";

import { MetaFunction } from "@remix-run/node";
import { contentKreditrechner } from "~/pages/rechner/kreditrechner/content-kreditrechner";
import { metaKreditrechner } from "~/pages/rechner/kreditrechner/meta-kreditrechner";
import { ZinsrechnerForm } from "~/pages/rechner/zinsrechner-form";

export const meta: MetaFunction = () => {
  return metaKreditrechner;
};

export default function Zinsrechner(): ReactElement {
  return (
    <>
      <header>
        <h4 className="text-center">Zinsrechner für einmalige Geldanlage</h4>
      </header>
      <ZinsrechnerForm />
      <article
        dangerouslySetInnerHTML={{ __html: contentKreditrechner.content }}
      />
      <p>Berechnungssystem für Zinsen auf Einmalanlagen</p>
    </>
  );
}
