import { FC } from "react";
import { Controller } from "react-hook-form";

import { EinkommenInputProps, LohnPeriod } from "./type";

export const EinkommenInput: FC<EinkommenInputProps> = ({
  control,
  period,
  handlePeriodChange,
}) => {
  return (
    <div>
      <label htmlFor="nettoEinkommen" className="inline-block">
        Einkommen (Ihr Bruttoeinkommen)
      </label>
      <div className="flex items-center gap-0.5">
        <Controller
          name="nettoEinkommen"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              className="w-2/3 rounded-md border px-3 py-1"
              placeholder="Ihr Bruttoeinkommen"
            />
          )}
        />
        <span className="flex items-center">€</span>
      </div>
      <div className="flex justify-start gap-4">
        <button
          type="button"
          onClick={() => handlePeriodChange(LohnPeriod.Monat)}
          className={`rounded px-4 py-2 ${
            period === LohnPeriod.Monat
              ? "bg-teal-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Monatlich
        </button>
        <button
          type="button"
          onClick={() => handlePeriodChange(LohnPeriod.Jahr)}
          className={`rounded px-4 py-2 ${
            period === LohnPeriod.Jahr
              ? "bg-teal-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Jährlich
        </button>
      </div>
    </div>
  );
};
