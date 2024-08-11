import { FC } from "react";

import { ResultsDisplayProps } from "~/widgets/rechner/brutto-netto-rechner/type";

export const ResultsDisplay: FC<ResultsDisplayProps> = ({ formData }) => {
  return (
    <div className="flex w-full flex-col sm:text-xl">
      <h3 className="mb-2 text-lg font-semibold">Ergebnisse</h3>
      <div>
        <strong>Einkommen:</strong>{" "}
        {formData
          ? `${formData.Einkommen} € (${formData.Period || "Nicht angegeben"})`
          : "Noch keine Daten"}
      </div>
    </div>
  );
};
