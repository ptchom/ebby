import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { currentYear } from "~/shared/date/currentYear";

import { ResultIncomeTaxForm } from "./";

interface Inputs {
  yearlyIncome: number;
  isSingle: boolean;
  churchTax: number;
  year: number;
}

export const EinkommensteuerRechnerForm = () => {
  const [formData, setFormData] = useState<Inputs | null>(null);

  const defaultValues = {
    yearlyIncome: 38000,
    isSingle: true,
    churchTax: 0,
    year: currentYear,
  };

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues,
  });

  const isSingle = watch("isSingle");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setFormData(data);
  };

  const divideLine = (
    <hr className="col-span-3 my-2 border-t border-black opacity-50" />
  );

  return (
    <>
      <form
        className="mx-auto mb-5 grid grid-cols-3 gap-1 rounded-lg border-2 border-gray-400/5 p-0.5 shadow-xl sm:text-xl md:p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* First line yearly income */}
        <label htmlFor="yearlyIncome" className="inline-block">
          Jahreseinkommen
        </label>
        <div className="col-span-2 flex gap-2">
          <input
            {...register("yearlyIncome")}
            type="number"
            id="yearlyIncome"
            className="pr-0.5"
          />
          <span>€</span>
        </div>
        {divideLine}

        {/* Family status */}
        <div className="flex self-center">Familienstand</div>
        <div className="col-span-2 flex items-center gap-0.5">
          <label
            htmlFor="isSingle"
            className="flex w-28 cursor-pointer items-center"
          >
            <input
              type="checkbox"
              {...register("isSingle")}
              id="isSingle"
              className="sr-only"
            />
            <div
              className={`h-5 w-10 shrink-0 rounded-full transition-transform duration-300 ${
                isSingle ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`size-5 rounded-full bg-white shadow transition-transform duration-300 ${
                  isSingle ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </div>
          </label>
          <span className="flex items-center">
            {isSingle ? "Single" : "In Partnerschaft"}
          </span>
        </div>
        {divideLine}

        {/* Church tax */}
        <label htmlFor="churchTax" className="flex items-center">
          Kirchensteuer:
        </label>
        <select
          {...register("churchTax")}
          id="churchTax"
          className="rounded-md border bg-white px-1 text-gray-800 outline-none"
        >
          <option value="0">Kein Kirchensteuer</option>
          <option value="8">8 % (Baden-Württemberg und Bayern)</option>
          <option value="9">9 % (übrige Bundesländer)</option>
        </select>
        {divideLine}

        {/* Year */}
        <label htmlFor="year" className="flex items-center">
          Jahr:
        </label>
        <select
          {...register("year")}
          id="year"
          className="rounded-md border bg-white px-1 text-gray-800 outline-none"
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        {divideLine}
        <button className="btnrechnen" type="submit">
          Rechnen
        </button>
      </form>
      {formData && <ResultIncomeTaxForm {...formData} />}
    </>
  );
};
