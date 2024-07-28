import { ReactElement } from "react";

import { MetaFunction } from "@remix-run/node";

import { metaKreditrechner } from "~/widgets/rechner/kreditrechner/meta-kreditrechner";

export const meta: MetaFunction = () => {
  return metaKreditrechner;
};

export default function Contact(): ReactElement {
  return (
    <article>
      <h3>Kontakt</h3>
      <hr className="my-4 border-t border-black opacity-50" />
      <p className="text-2xl">
        Wenn du mit mir in Kontakt treten möchtest, kannst du mich über Telegram
        erreichen: t.me/ptchom.
      </p>
      <hr className="my-4 border-t border-black opacity-50" />
    </article>
  );
}
