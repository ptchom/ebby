import { MetaFunction } from "@remix-run/node";
import { contentKreditrechner } from "~/ui/rechner/kreditrechner/content-kreditrechner";
import { metaKreditrechner } from "~/ui/rechner/kreditrechner/meta-kreditrechner";
import { ZinsrechnerForm } from "~/ui/rechner/zinsrechner-form";
import { ReactElement } from "react";

export const meta: MetaFunction = () => {
  return metaKreditrechner;
};

export default function Zinsrechner(): ReactElement {
  return (
    <>
      <header>
        <h2>Berechnungssystem für Zinsen auf Einmalanlagen</h2>
        <h5>Zinsrechner für einmalige Geldanlage</h5>
      </header>
      <ZinsrechnerForm />
      <article
        dangerouslySetInnerHTML={{ __html: contentKreditrechner.content }}
      />
    </>
  );
}
