import { JSX, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  BundeslandSelect,
  EinkommenInput,
  KinderInput,
  ResultsDisplay,
  SteuerklasseButtonRow,
  ToggleSwitchKirchensteuer,
} from "./";
import { FormDataInputs, LohnPeriod, ResultsDisplayProps } from "./type";

export const BruttoNettoForm = (): JSX.Element => {
  const { control, watch, handleSubmit, setValue } = useForm<FormDataInputs>({
    defaultValues: {
      nettoEinkommen: 0,
      bundesland: "Berlin",
      kirchensteuer: false,
      krankenversicherung: false,
      kinderfreiBetrag: 0,
    },
  });

  const [formData, setFormData] = useState<FormDataInputs | null>(null);
  const [period, setPeriod] = useState<LohnPeriod>(LohnPeriod.Monat);
  const [resultData, setResultData] = useState<ResultsDisplayProps>({
    bruttoEinkommen: 50000,
    rentenVersicherungBetrag: 18.6,
    krankenVersicherungBetrag: 15.8,
    lohnsteuerBetrag: 4,
    pflegeVersicherungBetrag: 3.4,
    arbeitslosenVersicherungBetrag: 2.6,
    kirchensteuerBetrag: 0,
  });

  const onSubmit: SubmitHandler<FormDataInputs> = (data) => {
    data.lohnPeriod = period;
    setFormData(data);
  };

  const handlePeriodChange = (newPeriod: LohnPeriod) => {
    setPeriod(newPeriod);
  };

  return (
    <section className="mb-5 flex flex-row gap-3 rounded-lg border-2 border-gray-400/5 p-1 pb-3 shadow-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-1/2 flex-col gap-2 sm:text-xl"
      >
        <EinkommenInput
          control={control}
          period={period}
          handlePeriodChange={handlePeriodChange}
        />
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
        <BundeslandSelect control={control} />
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
        <SteuerklasseButtonRow />
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
        <ToggleSwitchKirchensteuer control={control} />
        <hr className="col-span-3 my-2 border-t border-black opacity-50" />
        <KinderInput control={control} />
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
        <ResultsDisplay {...resultData} />
      </div>
    </section>
  );
};
