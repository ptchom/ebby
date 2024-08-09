import { FC } from "react";
import { Controller } from "react-hook-form";

import { bundeslaender } from "~/shared/constants";

import { BundeslandSelectProps } from "~/widgets/rechner/brutto-netto-rechner/type";

export const BundeslandSelect: FC<BundeslandSelectProps> = ({ control }) => {
  return (
    <>
      <Controller
        name="Bundesland"
        control={control}
        render={({ field }) => (
          <select
            {...field}
            className="w-2/3 rounded-md border px-3 py-1 text-base"
          >
            <option value="">Bitte wählen Sie Ihr Bundesland</option>
            {Object.keys(bundeslaender).map((key) => (
              <option key={key} value={key}>
                {bundeslaender[key].name}
              </option>
            ))}
          </select>
        )}
      />
    </>
  );
};
