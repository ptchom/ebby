import { ChangeEvent, FormEvent, useState } from "react";
import { Tooltip } from "~/ui/components/forms/tooltip";
import { pdf } from "@react-pdf/renderer";
import { PdfDocument } from "~/lib/utils/pdf/pdf-document";
import { calculateEndkapital } from "~/lib/rechner/zinsrechner/calculate-zins";
import { ZinsrechnerUserData } from "./type";

export const ZinsrechnerForm = () => {
  const [initialCapital, setInitialCapital] = useState<number>(1000);
  const [interestRate, setInterestRate] = useState<number>(3.79);
  const [duration, setDuration] = useState<number>(10);
  const [durationUnit, setDurationUnit] = useState("jahre"); // Новое состояние
  const [compoundInterest, setCompoundInterest] = useState<boolean>(true); // Новое состояние
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
    >
  ) => {
    if (changeEvent.target.name === "anfangskapital") {
      setInitialCapital(Number(changeEvent.target.value));
    } else if (changeEvent.target.name === "zinssatz") {
      setInterestRate(Number(changeEvent.target.value));
    } else if (changeEvent.target.name === "laufzeit") {
      setDuration(Number(changeEvent.target.value));
    } else if (changeEvent.target.name === "laufzeitUnit") {
      setDurationUnit(changeEvent.target.value);
    } else if (changeEvent.currentTarget.name === "janeinzinsansammlung") {
      setCompoundInterest(
        changeEvent.currentTarget.value === "Ja, Zinsansammlung"
      );
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateAndSetFinalCapital();
  };
  return (
    <div className="mx-auto mb-5 bg-opacity-5 p-5 rounded-lg shadow-xl text-2xl">
      <h4 className="text-center">ZinsrechnerForm</h4>
      <form
        onSubmit={handleSubmit}
        // className="flex flex-col justify-start gap-5"
        className="flex flex-col sm:grid sm:grid-cols-3 gap-2 md:gap-5  "
      >
        {/*  First line anfangskapital*/}
        <div className="flex gap-0.5">
          <label htmlFor="anfangskapital" className="inline-block">
            Anfangskapital
          </label>
          <Tooltip highlight="?" text="Anfangskapital erklärung" />
        </div>
        <div className="flex gap-0.5 col-span-2">
          <input
            name="anfangskapital"
            type="number"
            defaultValue={initialCapital}
            onChange={handleChange}
            className="border rounded-md text-right w-48"
          />
          <span className="font-semibold">€</span>
        </div>
        {/*Zinssatz*/}
        <div className="flex gap-0.5">
          <label htmlFor="zinssatz" className="inline-block">
            Zinssatz
          </label>
          <Tooltip highlight="?" text="Zinssatz erklärung" />
        </div>
        <div className="flex gap-0.5 col-span-2">
          <input
            name="zinssatz"
            type="number"
            step="0.001"
            defaultValue={interestRate}
            onChange={handleChange}
            className="border rounded-md text-right w-48"
          />
          <span className="font-semibold">% p.a.</span>
        </div>
        {/*Laufzeit*/}
        <div className="flex gap-0.5">
          <label htmlFor="laufzeit" className="inline-block">
            Laufzeit
          </label>
          <Tooltip highlight="?" text="Laufzeit erklärung" />
        </div>
        <div className="flex flex-col col-span-2 gap-0.5 md:flex-row md:col-span-2">
          <input
            name="laufzeit"
            type="number"
            defaultValue={duration}
            onChange={handleChange}
            className="border rounded-md text-right w-48"
          />
          <select
            id="laufzeit"
            name="laufzeitUnit"
            onChange={handleChange}
            className="border rounded-md outline-none px-3 bg-white text-gray-800 w-36"
          >
            <option value="jahre">Jahre</option>
            <option value="monate">Monate</option>
          </select>
        </div>
        {/*Zinseszins*/}
        <div className="flex gap-0.5">
          <label htmlFor="zinseszins" className="inline-block">
            Zinseszins
          </label>
          <Tooltip highlight="?" text="Zinseszins erklärung" />
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="ja"
              name="janeinzinsansammlung"
              value="Ja, Zinsansammlung"
              onChange={handleChange}
              checked={compoundInterest}
              className="border rounded-sm text-right"
            />
            <label htmlFor="ja">Ja</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="nein"
              name="janeinzinsansammlung"
              value="Nein, Zinsauszahlung"
              onChange={handleChange}
              checked={!compoundInterest}
              className="border rounded-sm text-right"
            />
            <label htmlFor="nein">Nein</label>
          </div>
        </div>
        {/*Endkapital*/}
        <div className="flex gap-0.5">
          <label htmlFor="endkapital" className="inline-block">
            Endkapital
          </label>
          <Tooltip highlight="?" text="Endkapital erklärung" />
        </div>
        <div className="flex gap-0.5 col-span-2">
          <input
            disabled
            name="endkapital"
            defaultValue={finalCapital}
            type="number"
            className="border rounded-md text-right text-teal-700 font-bold text-3xl w-48"
          />
          <span>€</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <button className="btnrechnen" type="submit">
            Rechnen
          </button>
          <button className="btnrechnen" onClick={downloadPdf}>
            Generate PDF
          </button>
        </div>
      </form>

      {/*<ZinsrechnerTable {...userData} />*/}
    </div>
  );
};
