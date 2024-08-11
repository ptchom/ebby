import { FC } from "react";

import { ResultsDisplayProps } from "./type";

export const ResultsDisplay: FC<ResultsDisplayProps> = (props) => {
  const {
    bruttoEinkommen,
    rentenVersicherungBetrag,
    krankenVersicherungBetrag,
    lohnsteuerBetrag,
    pflegeVersicherungBetrag,
    arbeitslosenVersicherungBetrag,
    kirchensteuerBetrag,
  } = props;

  return (
    <div className="flex w-full flex-col sm:text-xl">
      <h3 className="mb-2 text-lg font-semibold">Ergebnisse</h3>
      <div>
        <strong>Einkommen:</strong> {bruttoEinkommen} €
      </div>
      <div>
        <strong>Nettoeinkommen:</strong> {/* Здесь будет расчет */}
        {/* Пример: {netIncome} € */}
      </div>
      <div>
        <strong>Rentenversicherung:</strong>{" "}
        {rentenVersicherungBetrag
          ? `${rentenVersicherungBetrag} €`
          : "Nicht angegeben"}
      </div>
      <div>
        <strong>Krankenversicherung:</strong>{" "}
        {krankenVersicherungBetrag
          ? `${krankenVersicherungBetrag} €`
          : "Nicht angegeben"}
      </div>
      <div>
        <strong>Lohnsteuer:</strong>{" "}
        {lohnsteuerBetrag ? `${lohnsteuerBetrag} €` : "Nicht angegeben"}
      </div>
      <div>
        <strong>Pflegeversicherung:</strong>{" "}
        {pflegeVersicherungBetrag
          ? `${pflegeVersicherungBetrag} €`
          : "Nicht angegeben"}
      </div>
      <div>
        <strong>Arbeitslosenversicherung:</strong>{" "}
        {arbeitslosenVersicherungBetrag
          ? `${arbeitslosenVersicherungBetrag} €`
          : "Nicht angegeben"}
      </div>
      <div>
        <strong>Kirchensteuer:</strong>{" "}
        {kirchensteuerBetrag ? `${kirchensteuerBetrag} €` : "Nicht angegeben"}
      </div>
    </div>
  );
};
