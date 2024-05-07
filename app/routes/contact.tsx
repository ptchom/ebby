import { MetaFunction } from "@remix-run/node";
import { metaKreditrechner } from "~/ui/rechner/kreditrechner/meta-kreditrechner";
import { ReactElement } from "react";

export const meta: MetaFunction = () => {
  return metaKreditrechner;
};

export default function Contact(): ReactElement {
  return (
    <article>
      <h3>Kontakt</h3>
      <hr className="border-black border-t opacity-50 my-4" />
      <p className="text-2xl">
        Wenn du mit mir in Kontakt treten möchtest, kannst du mich über Telegram
        erreichen: t.me/ptchom.
      </p>
      <hr className="border-black border-t opacity-50 my-4" />
    </article>
  );
}
