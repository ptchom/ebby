import { ReactElement } from "react";

import { MetaFunction } from "@remix-run/node";

import { contentKreditrechner } from "~/widgets/rechner/kreditrechner/content-kreditrechner";
import { ZinsrechnerForm } from "~/widgets/rechner/zinsrechner-form";
import { metaZinsrechner } from "~/widgets/rechner/zinsrechner-form/meta-zinsrechner";

export const meta: MetaFunction = () => {
  return metaZinsrechner;
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
