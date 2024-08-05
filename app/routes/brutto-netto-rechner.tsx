import type { MetaFunction } from "@remix-run/node";

import { ImAufbau } from "~/entities/aside/im-aufbau";

import {
  BruttoNettoForm,
  contentBruttoNettoRechner,
  metaBruttoNetto,
} from "~/widgets/rechner/brutto-netto-rechner";

export const meta: MetaFunction = () => {
  return metaBruttoNetto;
};

export default function BruttoNettoRechner() {
  return (
    <section>
      <header>
        <h2>Brutto Netto Rechner</h2>
      </header>
      <ImAufbau />
      <BruttoNettoForm />
      <div
        className="text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: contentBruttoNettoRechner.content }}
      />
    </section>
  );
}
