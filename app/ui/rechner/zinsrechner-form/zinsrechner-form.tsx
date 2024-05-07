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
    <div className="mx-auto mb-5 bg-opacity-5 p-5 rounded-lg shadow-xl text-xl">
      <h4 className="text-center">ZinsrechnerForm</h4>
      <form
        onSubmit={handleSubmit}
        // className="flex flex-col justify-start gap-5"
        className="grid grid-cols-3 gap-2 md:gap-5  "
      >
        {/*  First line anfangskapital*/}
        <label htmlFor="anfangskapital" className="inline-block">
          Anfangskapital
        </label>
        <div className="flex gap-0.5 col-span-2">
          <input
            name="anfangskapital"
            type="number"
            defaultValue={initialCapital}
            onChange={handleChange}
            className="border rounded-md text-right w-36"
          />
          <span className="">€</span>
        </div>
        {/*Zinssatz*/}
        <label htmlFor="zinssatz" className="inline-block">
          Zinssatz
        </label>
        <div className="flex gap-0.5 col-span-2">
          <input
            name="zinssatz"
            type="number"
            step="0.001"
            defaultValue={interestRate}
            onChange={handleChange}
            className="border rounded-md text-right w-36"
          />
          <span className="">% p.a.</span>
        </div>
        {/*Laufzeit*/}
        <label htmlFor="laufzeit" className="inline-block">
          Laufzeit
        </label>
        <div className="flex col-span-2 gap-0.5 ">
          <input
            name="laufzeit"
            type="number"
            defaultValue={duration}
            onChange={handleChange}
            className="border rounded-md text-right w-36"
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
        <label htmlFor="zinseszins" className="inline-block">
          Zinseszins
        </label>
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
        <label htmlFor="endkapital" className="inline-block">
          Endkapital
        </label>
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
