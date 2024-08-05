import { ChangeEvent, FormEvent, useState } from "react";

import { pdf } from "@react-pdf/renderer";

import { PdfDocument } from "~/shared/pdf/pdf-document";
import { calculateEndkapital } from "~/shared/rechner/zinsrechner/calculate-zins";

import { ZinsrechnerUserData } from "./type";

export const ZinsrechnerForm = () => {
  const [initialCapital, setInitialCapital] = useState<number>(1000);
  const [interestRate, setInterestRate] = useState<number>(3.79);
  const [duration, setDuration] = useState<number>(10);
  const [durationUnit, setDurationUnit] = useState("jahre");
  const [compoundInterest, setCompoundInterest] = useState<boolean>(true);
  const [finalCapital, setFinalCapital] = useState<string>("");

  const userData: ZinsrechnerUserData = {
    initialCapital: initialCapital,
    interestRate: interestRate,
    duration: duration,
    durationUnit: durationUnit,
    compoundInterest: compoundInterest,
  };

  const calculateAndSetFinalCapital = () => {
    const newFinalCapital = calculateEndkapital(userData);
    setFinalCapital(newFinalCapital);
  };

  const downloadPdf = async (): Promise<void> => {
    console.log({ pdfData: userData });
    const pdfDoc = pdf(<PdfDocument content={userData} />);
    const blob: Blob = await pdfDoc.toBlob();
    window.open(URL.createObjectURL(blob), "_blank");
  };

  const handleChange = (
    changeEvent: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >,
  ) => {
    if (changeEvent.target.name === "anfangskapital") {
      setInitialCapital(Number(changeEvent.target.value));
    } else if (changeEvent.target.name === "zinssatz") {
      setInterestRate(Number(changeEvent.target.value));
    } else if (changeEvent.target.name === "laufzeit") {
      setDuration(Number(changeEvent.target.value));
    } else if (changeEvent.target.name === "laufzeitUnit") {
      setDurationUnit(changeEvent.target.value);
    }
  };

  const toggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "zinseszins-toggler") {
      setCompoundInterest(event.target.checked);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateAndSetFinalCapital();
  };

  return (
    <form
      className="mx-auto mb-5 grid grid-cols-3 gap-1 rounded-lg border-2 border-gray-400/5 p-0.5 shadow-xl sm:text-xl md:p-5"
      onSubmit={handleSubmit}
    >
      {/*  First line anfangskapital */}
      <label htmlFor="anfangskapital" className="inline-block">
        Anfangskapital
      </label>
      <div className="col-span-2 flex gap-2">
        <input
          name="anfangskapital"
          type="number"
          defaultValue={initialCapital}
          onChange={handleChange}
          className="pr-0.5"
        />
        <span className="">€</span>
      </div>
      <hr className="col-span-3 my-2 border-t border-black opacity-50" />

      {/* Zinssatz */}
      <label htmlFor="zinssatz" className="inline-block">
        Zinssatz
      </label>
      <div className="col-span-2 flex gap-2">
        <input
          name="zinssatz"
          type="number"
          step="0.001"
          defaultValue={interestRate}
          onChange={handleChange}
          className="w-28 rounded-md border pr-0.5 text-right"
        />
        <span className="">% p.a.</span>
      </div>
      <hr className="col-span-3 my-2 border-t border-black opacity-50" />

      {/* Laufzeit */}
      <label htmlFor="laufzeit" className="inline-block">
        Laufzeit
      </label>
      <div className="col-span-2 flex gap-0.5">
        <input
          name="laufzeit"
          type="number"
          defaultValue={duration}
          onChange={handleChange}
          className="w-28 rounded-md border pr-0.5 text-right"
        />
        <select
          id="laufzeit"
          name="laufzeitUnit"
          onChange={handleChange}
          className="w-28 rounded-md border bg-white px-3 text-gray-800 outline-none"
        >
          <option value="jahre">Jahre</option>
          <option value="monate">Monate</option>
        </select>
      </div>
      <hr className="col-span-3 my-2 border-t border-black opacity-50" />

      {/* Zinseszins */}

      <label htmlFor="zinseszins" className="flex self-center">
        Zinseszins
      </label>
      <div className="col-span-2 flex items-center gap-0.5">
        <label
          htmlFor="zinseszins-toggler"
          className="flex w-28 cursor-pointer items-center"
        >
          <input
            type="checkbox"
            id="zinseszins-toggler"
            onChange={toggleChange}
            checked={compoundInterest}
            className="sr-only"
          />
          <div
            className={`h-5 w-10 shrink-0 rounded-full transition-transform duration-300 ${
              compoundInterest ? "bg-teal-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`size-5 rounded-full bg-white shadow transition-transform duration-300 ${
                compoundInterest ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
        </label>
        <span className="flex items-center">
          {compoundInterest ? "Ja, Zinsansammlung" : "Nein, Zinsauszahlung"}
        </span>
      </div>

      <hr className="col-span-3 my-2 border-t border-black opacity-50" />

      {/* Endkapital */}
      <label htmlFor="endkapital" className="flex self-center">
        Endkapital
      </label>

      <div className="col-span-2 flex gap-0.5">
        <input
          readOnly
          name="endkapital"
          defaultValue={finalCapital}
          type="number"
          className="w-44 rounded-md border pr-0.5 text-right text-2xl font-bold text-red-800"
        />
        <span className="flex self-center text-xl">€</span>
      </div>
      <hr className="col-span-3 my-2 border-t border-black opacity-50" />
      <div className="flex flex-col gap-10 sm:flex-row">
        <button className="btnrechnen" type="submit">
          Rechnen
        </button>
        {/*TODO: Add PDF generation*/}
        {/*<button className="btnrechnen" onClick={downloadPdf}>*/}
        {/*  Generate PDF*/}
        {/*</button>*/}
      </div>

      {/* <ZinsrechnerTable {...userData} /> */}
    </form>
  );
};
