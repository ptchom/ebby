import { MetaFunction } from "@remix-run/node";
import { contentKreditrechner } from "~/rechner/kreditrechner/content-kreditrechner";
import { metaKreditrechner } from "~/rechner/kreditrechner/meta-kreditrechner";
import { ZinsrechnerForm } from "~/rechner/zinsrechner-form";
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
