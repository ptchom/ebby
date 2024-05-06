import type { MetaFunction } from "@remix-run/node";
import { metaKreditrechner } from "~/rechner/kreditrechner/meta-kreditrechner";
import KreditrechnerForm from "~/rechner/kreditrechner/kreditrechner-form";

export const meta: MetaFunction = () => {
  return metaKreditrechner;
};

export default function Kreditrechner() {
  return (
    <section>
      <header>
        <h2>Kreditrechner</h2>
      </header>
      <KreditrechnerForm />
      <article>
        <h2>Willkommen zum Zinsrechner</h2>
        <p>
          Unser Zinsrechner auf unserer Webseite ist für verschiedenste
          Anlageformen ausgelegt und ermöglicht Ihnen die genaue Berechnung
          Ihrer möglichen Erträge aus Zinserträgen.
        </p>

        <h3>Einstellungsmöglichkeiten und Genauigkeit</h3>
        <p>
          Sie haben die Möglichkeit, den Anlagebetrag, die Zinserträge, den
          Zinssatz, den Anlagezeitraum oder den Endwert zu berechnen. Zusätzlich
          können Sie regelmäßige Zahlungen, zum Beispiel monatliche
          Sparbeiträge, berücksichtigen.
        </p>

        <h3>Flexibilität</h3>
        <p>
          Der Rhythmus der Zinszahlungen kann nach Wunsch festgelegt werden:
          monatlich, vierteljährlich, halbjährlich oder jährlich. Es kann sowohl
          mit vorschüssiger als auch mit nachschüssiger Verzinsung gerechnet
          werden.
        </p>

        <h3>Zinseszinsen und andere Optionen</h3>
        <p>
          Unser Zinsrechner berücksichtigt den Zinseszinseffekt, was bedeutet,
          dass sowohl der Anlagebetrag als auch die bereits erzielten Zinsen
          verzinst werden. Sie haben auch die Möglichkeit, eine endfällige
          Einmalzahlung zu berücksichtigen.
        </p>

        <h3>Stets aktuell und einfach zu bedienen</h3>
        <p>
          Der effektive Jahreszins, der für den Vergleich unterschiedlicher
          Anlageangebote relevant ist, wird ebenfalls berechnet. Auf all diese
          Berechnungen können Sie sich stets verlassen, da unser Rechner
          regelmäßig aktualisiert wird.
        </p>

        <h3>Bereitschaft zu starten?</h3>
        <p>
          Ob Sie die Zinsen für Ihre Anlagen berechnen möchten, oder die
          zukünftige Entwicklung Ihrer Geldanlagen nachvollziehen wollen - unser
          Zinsrechner steht Ihnen zur Verfügung. Starten Sie noch heute mit der
          Berechnung und sehen Sie, wie einfach es sein kann, Ihre Finanzen zu
          planen!
        </p>
      </article>
    </section>
  );
}
