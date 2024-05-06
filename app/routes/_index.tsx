import type { MetaFunction } from "@remix-run/node";
import { WEBSITE_API } from "~/shared/api";
import { metatags } from "~/shared/lib/meta-semantic";

export const meta: MetaFunction = () => {
  return [
    { title: WEBSITE_API.title },
    { name: metatags.description, content: WEBSITE_API.description },
    { name: metatags.robots, content: WEBSITE_API.description },
    { name: metatags.language, content: WEBSITE_API.language },
    { name: metatags.classification, content: WEBSITE_API.classification },
    { name: metatags.author, content: WEBSITE_API.author },
    { name: metatags.owner, content: WEBSITE_API.author },
    { name: metatags.url, content: WEBSITE_API.url },
  ];
};

export default function Index() {
  return (
    <article className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-semibold">
        Online-Rechner für Ihre optimale Finanzplanung
      </h2>
      <p className="my-2">
        Egal ob Sie versuchen, Ihre Renditen zu maximieren, Ihre Kreditzinsen zu
        berechnen, oder den Anteil Ihres Einkommens zu ermitteln, der nach Abzug
        der Steuern übrig bleibt, unser Ziel ist es, Ihnen bei all diesen
        Berechnungen zur Seite zu stehen.
      </p>

      <p className="my-2">
        Bei EB.BY bieten wir Ihnen verschiedene Online-Rechner, die flexibel und
        einfach zu bedienen sind. Unser Ziel ist es, Ihnen eine Plattform zu
        bieten, auf der Sie unabhängig von spezifischen Produktangeboten
        Szenarien für Ihre individuelle Finanzplanung entwickeln können.
      </p>

      <p className="my-2">
        Unsere Finanzrechner stehen Ihnen sowohl für private Berechnungen, als
        auch für geschäftliche Nutzungen zur Verfügung. Damit unterstützen wir
        Sie, fundierte Entscheidungen zu treffen und wichtige finanzielle
        Meilensteine zu erreichen.
      </p>

      <h2 className="my-2 text-2xl font-semibold">
        Unsere Top-Rechner (alle Online-Rechner)
      </h2>

      <h3 className="my-2 text-xl font-semibold">
        Zinsrechner für einmalige Geldanlage
      </h3>
      <p className="my-2">
        Dieser Zinsrechner berechnet wahlweise Endkapital, Laufzeit, Zinssatz
        oder Anfangskapital für Einmalanlagen – optional mit oder ohne
        Zinseszins und unterjähriger Verzinsung wahlweise linear oder
        exponentiell. Damit können Sie Ihre Geldanlage optimal planen und
        verwalten.
      </p>

      <h3 className="my-2 text-xl font-semibold">
        Sparrechner für regelmäßige Sparraten
      </h3>
      <p className="my-2">
        Mit unserem Sparrechner können Sie für Ihren Banksparplan wahlweise
        Endkapital, Sparrate, Dynamik, Zinssatz, Laufzeit oder Anfangskapital
        bei wählbaren Intervallen für Einzahlung und Zinsgutschrift berechnen.
      </p>

      <h3 className="my-2 text-xl font-semibold">
        Ausdrucke und PDF-Dokumente mit persönlichem Seitenkopf - TBD
      </h3>
      <p className="my-2">
        Wenn Sie in der Finanzbranche tätig sind und unsere Online-Rechner zur
        Unterstützung Ihrer Arbeit nutzen möchten, haben Sie auch die
        Möglichkeit, Ausdrucke für Ihre Kunden zu erstellen, auf denen auch Ihr
        Name steht.
      </p>

      <h3 className="my-2 text-xl font-semibold">Aktuelle Informationen</h3>
      <p className="my-2">
        Wir halten Sie auf dem Laufenden, was Änderungen oder Neuerungen bei den
        Online-Rechnern oder im Bereich Finanzen betrifft. Auf unserer Seite
        finden Sie regelmäßig aktualisierte Meldungen zu den wichtigsten Themen.
      </p>

      <h3 className="my-2 text-xl font-semibold">
        Wichtige Begriffe rund ums Geld - TBD
      </h3>
      <p className="my-2">
        Unser Glossar bietet Ihnen eine einfache Erklärung für wichtige
        Finanzbegriffe, die Ihnen helfen, das oft verwirrende Jargon der
        Finanzwelt besser zu verstehen.
      </p>

      <p className="my-2">
        Indem Sie sich ein umfassendes Wissen aneignen und fundierte finanzielle
        Entscheidungen treffen, kommen Sie Ihren finanziellen Zielen einen
        Schritt näher. Bei EB.BY unterstützen wir Sie dabei - effizient,
        unabhängig und kostenfrei. Vertrauen Sie auf unsere Erfahrung und
        Expertise.
      </p>

      <p className="my-2">Wir freuen uns, Sie auf Ihrer Reise zu begleiten.</p>

      <h4 className="my-3 text-lg font-semibold">
        Online-Rechner für alle: EB.BY, Ihr vertrauenswürdiger Online-Rechner
        für jede Finanzsituation.
      </h4>
    </article>
  );
}
