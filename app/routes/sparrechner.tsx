import { ReactElement } from "react";

import { SparrechnerForm } from "~/pages/rechner/sparrechner/sparrechner";

export default function Sparrechner(): ReactElement {
  return (
    <article>
      <h2>Sparrechner</h2>

      <SparrechnerForm />
      <p>
        Unser Sparrechner ist ein effektives Werkzeug zur Berechnung Ihrer
        potenziellen Ersparnisse, auf Basis verschiedener Variablen wie der
        monatlichen Sparrate, des Zinssatzes, und der Anlagedauer.
      </p>

      <h3>Flexibilität und Präzision</h3>
      <p>
        Der Sparrechner bietet Ihnen die Möglichkeit, verschiedene Szenarien zu
        simulieren, und Sie können damit Ihre Sparziele basierend auf Ihrer
        finanziellen Situation und Ihren persönlichen Zielen anpassen. Die
        Berechnungen unseres Rechners sind präzise und geben Ihnen ein klares
        Bild Ihrer finanziellen Zukunft.
      </p>

      <h3>Berücksichtigung von Zinseszinsen</h3>
      <p>
        Unser Sparrechner berücksichtigt auch die Kraft des Zinseszinses, die
        einen signifikanten Einfluss auf Ihre Ersparnisse haben kann. Damit
        können Sie die langfristigen Auswirkungen Ihrer Sparstrategie besser
        verstehen und optimieren.
      </p>

      <h3>Nutzerfreundlichkeit</h3>
      <p>
        Der Sparrechner ist einfach zu bedienen. Sie müssen lediglich Ihre
        monatliche Sparsumme, den Zinssatz und die Dauer Ihres Sparplans
        eingeben, und der Rechner liefert Ihnen sofort eine detaillierte
        Übersicht über das Wachstum Ihrer Investitionen.
      </p>

      <h3>Aktualität</h3>
      <p>
        Unser Sparrechner wird ständig aktualisiert, um die Genauigkeit der
        Berechnungen sicherzustellen. So können Sie stets auf aktuelle und
        zuverlässige Informationen für Ihre finanzielle Planung zählen.
      </p>

      <h3>Bereit zu starten?</h3>
      <p>
        Machen Sie sich mit unserem Sparrechner ein klares Bild von Ihrer
        finanziellen Zukunft. Beginnen Sie noch heute mit der Planung Ihrer
        Ersparnisse und sehen Sie, welche Auswirkungen verschiedene Sparpläne
        auf Ihre zukünftige finanzielle Situation haben können.
      </p>
    </article>
  );
}
