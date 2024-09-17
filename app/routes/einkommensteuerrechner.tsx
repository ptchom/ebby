import type { MetaFunction } from "@remix-run/node";
import { EinkommensteuerRechnerForm } from "app/widgets/rechner/einkommen-steuerrechner-form";

import { WEBSITE_API } from "~/shared/config/api";
import { metatags } from "~/shared/seo/meta-semantic";

export const meta: MetaFunction = () => {
  return [
    { title: "Einkommensteuerrechner" },
    {
      name: metatags.description,
      content:
        "Die Berechnung der Einkommensteuer kann eine komplexe Aufgabe sein, da sie von verschiedenen Faktoren abhängt," +
        " wie beispielsweise Ihrem persönlichen Einkommen, Ihrem Familienstand und anderen Details.",
    },
    { name: metatags.language, content: "DE" },
    {
      name: metatags.keywords,
      content: "Einkommensteuerrechner Einkommensteuer",
    },
    { name: metatags.classification, content: WEBSITE_API.classification },
    { name: metatags.author, content: WEBSITE_API.author },
    { name: metatags.owner, content: WEBSITE_API.author },
    { name: metatags.url, content: WEBSITE_API.url },
  ];
};

export default function Einkommensteuerrechner() {
  return (
    <article>
      <EinkommensteuerRechnerForm />
      <h2>Einkommensteuerrechner</h2>
      <p>
        Der Einkommensteuerrechner auf unserer Webseite ist ein leistungsfähiges
        und benutzerfreundliches Instrument, das Ihnen hilft, Ihre
        Einkommensteuer schnell und genau zu berechnen.
      </p>

      <h3>Was macht unseren Einkommensteuerrechner so besonders?</h3>
      <p>
        Sie können mehrere Einkommen und Steuerklassen eingeben, um ein genaues
        Bild Ihrer steuerlichen Verhältnisse zu bekommen. Außerdem
        berücksichtigt unser Rechner Sondereffekte wie zum Beispiel
        Kinderfreibetrag, Vorsorgeaufwendungen oder außergewöhnliche
        Belastungen.
      </p>

      <h3>
        Kinderfreibetrag, Vorsorgeaufwendungen und außergewöhnliche Belastungen
      </h3>
      <p>
        Wenn Sie Kinder haben, können Sie den Kinderfreibetrag in den Rechner
        eingeben, um zu sehen, wie sich dieser auf Ihre Steuer auswirkt. Bei
        Vorsorgeaufwendungen und außergewöhnlichen Belastungen können Sie
        schnell herausfinden, wie sich diese Positionen auf Ihre Steuerschuld
        auswirken.
      </p>

      <h3>Genauigkeit und Benutzerfreundlichkeit</h3>
      <p>
        Unser Einkommensteuerrechner ist nicht nur sehr genau, er ist auch sehr
        benutzerfreundlich. Sie müssen lediglich Ihre Einkommen und
        Steuerklassen eingeben und der Rechner erledigt den Rest. Sie erhalten
        sofort eine detaillierte Übersicht über Ihre steuerliche Situation.
      </p>

      <h3>Stets Aktuell</h3>
      <p>
        Unser Einkommensteuerrechner wird ständig aktualisiert, um
        sicherzustellen, dass die Berechnungen auf den neuesten Steuergesetzen
        und -sätzen beruhen. Sie können sich darauf verlassen, dass Sie immer
        die genauesten und aktuellsten Informationen erhalten.
      </p>

      <h3>Bereit zu starten?</h3>
      <p>
        Mit unserem Einkommensteuerrechner können Sie sich ein klares Bild von
        Ihrer steuerlichen Situation machen. Beginnen Sie noch heute mit der
        Berechnung Ihrer Einkommensteuer und sehen Sie, wie einfach es ist, Ihre
        Steuern zu planen und zu optimieren.
      </p>
    </article>
  );
}
