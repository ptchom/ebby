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
        <h2>Zinsrechner für einmalige Geldanlage</h2>
      </header>
      <ZinsrechnerForm />
      <article
        dangerouslySetInnerHTML={{ __html: contentKreditrechner.content }}
      />
      <p>Berechnungssystem für Zinsen auf Einmalanlagen</p>
    </>
  );
}
