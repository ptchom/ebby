import { ReactElement } from "react";
import RechnerLayout from "~/layouts/rechner-layout";

export default function Mietrechner(): ReactElement {
  return (
    <RechnerLayout>
      <article>
        <h2>Willkommen zum Mietrechner</h2>
        <p>
          Unser Mietrechner ist ein leistungsstarkes Hilfsmittel, das Ihnen
          dabei hilft, Ihre monatlichen Mietkosten oder die Rentabilität eines
          potenziellen Mietobjekts zu berechnen.
        </p>

        <h3>Funktionalität und Genauigkeit</h3>
        <p>
          Dieser Mietrechner ist in der Lage, eine Vielzahl von Parametern zu
          berücksichtigen, einschließlich Kaltmiete, Nebenkosten, Wohnfläche und
          Mietdauer. Egal, ob Sie ein Mieter oder Vermieter sind, unser Rechner
          bietet genaue und detaillierte Berechnungen basierend auf Ihren
          Eingaben.
        </p>

        <h3>Benutzerfreundlichkeit</h3>
        <p>
          Unser Mietrechner ist einfach und intuitiv zu bedienen. Sie müssen
          lediglich die entsprechenden Informationen eingeben und der Rechner
          liefert Ihnen eine präzise und detaillierte Kalkulation Ihrer
          monatlichen Mietkosten oder Mieteinnahmen.
        </p>

        <h3>Aktualität</h3>
        <p>
          Wir aktualisieren unseren Mietrechner regelmäßig, um sicherzustellen,
          dass er die neuesten Entwicklungen im Mietrecht und auf dem
          Immobilienmarkt berücksichtigt. Sie können also sicher sein, dass Sie
          stets aktuelle und zuverlässige Informationen erhalten.
        </p>

        <h3>Bereit zu starten? </h3>
        <p>
          Ob Sie ein Mieter, der seine Mietkosten kalkulieren möchte, oder ein
          Vermieter, der die Mietrendite ermitteln will, sind - unser
          Mietrechner steht Ihnen zur Verfügung, um Sie dabei zu unterstützen.
          Starten Sie noch heute mit der Berechnung und nutzen Sie dieses Tool
          für Ihre Mietplanung!
        </p>
      </article>
    </RechnerLayout>
  );
}
