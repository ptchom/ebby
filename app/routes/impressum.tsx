import { ReactElement } from "react";

export default function Impressum(): ReactElement {
  return (
    <article className="mx-auto p-5">
      <h2>Impressum</h2>
      <hr className="border-black border-t opacity-50 my-4" />
      <h3>Angaben gemäß § 5 TMG:</h3>
      <h4>Betreiber und Verantwortlicher</h4>
      <address className="not-italic">
        <p>Ondrei Podloubnyi</p>
        <p>vulica Krylienki 11/55</p>
        <p>212011 Mahilioŭ</p>
        <p>Belarus</p>
        <p>Email: omogilev@gmail.com</p>
        <p>Telegram: t.me/ptchom</p>
      </address>
      <hr className="border-black border-t opacity-50 my-4" />

      <h3>Haftungsausschluss</h3>
      <p>
        Die Informationen auf dieser Webseite wurden mit größtmöglicher Sorgfalt
        zusammengestellt. Dennoch kann keine Gewähr für die Aktualität,
        Richtigkeit, Vollständigkeit und Verfügbarkeit der dargestellten
        Informationen übernommen werden. Eine Haftung für direkt oder indirekt
        aus der Nutzung dieser Webseite entstehende Schäden kann nicht
        übernommen werden.
      </p>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung
        für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
        sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <h3> Streitschlichtung: </h3>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:
        https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE
      </p>
      <p>
        Hinweis: Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle bin ich nicht verpflichtet und nicht
        bereit.
      </p>
      <hr className="border-black border-t opacity-50 my-4" />
    </article>
  );
}
