import { JSX, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { FormDataInputs } from "./type";
import {
  BundeslandSelect,
  SteuerklasseButtonRow,
  ToggleSwitchBruttoNetto,
} from "./";

export const BruttoNettoForm = (): JSX.Element => {
  const { control, handleSubmit, setValue } = useForm<FormDataInputs>({
    defaultValues: {
      kirchensteuer: false,
      krankenversicherung: false,
    },
  });
  const [formData, setFormData] = useState<FormDataInputs | null>(null);
  const [period, setPeriod] = useState<string>("Monatlich");

  const onSubmit: SubmitHandler<FormDataInputs> = (data) => {
    data.Period = period;
    setFormData(data);
  };

  const handlePeriodChange = (newPeriod: string) => {
    setPeriod(newPeriod);
  };

  return (
    <section className="mb-5 flex flex-row gap-3 rounded-lg border-2 border-gray-400/5 p-1 pb-3 shadow-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-1/2 flex-col gap-2 sm:text-xl"
      >
        <label htmlFor="Einkommen" className="inline-block">
          Einkommen ( Ihr Bruttoeinkommen )
        </label>
        <div className="flex items-center gap-0.5">
          <Controller
            name="Einkommen"
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
            onClick={() => handlePeriodChange("Monatlich")}
            className={`rounded px-4 py-2 ${
              period === "Monatlich" ? "bg-teal-500 text-white" : "bg-gray-200"
            }`}
          >
            Monatlich
          </button>
          <button
            type="button"
            onClick={() => handlePeriodChange("Jährlich")}
            className={`rounded px-4 py-2 ${
              period === "Jährlich" ? "bg-teal-500 text-white" : "bg-gray-200"
            }`}
          >
            Jährlich
          </button>
        </div>
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
        <label htmlFor="Bundesland" className="inline-block">
          Bundesland
        </label>
        <BundeslandSelect control={control} />
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
        <label htmlFor="Steuerklasse" className="inline-block">
          Steuerklasse
        </label>
        <SteuerklasseButtonRow />
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
        <ToggleSwitchBruttoNetto
          name="kirchensteuer"
          label="Kirchensteuer"
          control={control}
        />
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
        <label htmlFor="Kinder" className="inline-block">
          Kinder
        </label>
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />{" "}
        <label htmlFor="Krankenversicherung" className="inline-block">
          Krankenversicherung
        </label>
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
        <label htmlFor="KVZusatzbeitrag" className="inline-block">
          KV-Zusatzbeitrag
        </label>
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />{" "}
        <label htmlFor="Rentenversicherung" className="inline-block">
          Rentenversicherung
        </label>
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
        <label htmlFor="Arbeitslosenversicherung" className="inline-block">
          Arbeitslosenversicherung
        </label>
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
      </form>

      <div className="flex w-1/2 flex-col sm:text-xl">
        <h3 className="mb-2 text-lg font-semibold">Ergebnisse</h3>
        <div>
          <strong>Einkommen:</strong>{" "}
          {formData
            ? `${formData.Einkommen} € (${formData.Period})`
            : "Noch keine Daten"}
        </div>
      </div>
    </section>
  );
};
