import { ChangeEvent, FormEvent, useState } from "react";
import { Tooltip } from "~/ui/components/forms/tooltip";
import { pdf } from "@react-pdf/renderer";
import { PdfDocument } from "~/lib/utils/pdf/pdf-document";
import { calculateEndkapital } from "~/lib/rechner/zinsrechner/calculate-zins";
import { ZinsrechnerPdfData } from "~/ui/rechner/zinsrechner-form/type";

export const ZinsrechnerForm = () => {
  const [initialCapital, setInitialCapital] = useState<number>(1000);
  const [interestRate, setInterestRate] = useState<number>(1.23);
  const [duration, setDuration] = useState<number>(3);
  const [durationUnit, setDurationUnit] = useState("jahre"); // Новое состояние
  const [compoundInterest, setCompoundInterest] = useState<boolean>(true); // Новое состояние
  const [finalCapital, setFinalCapital] = useState<string>("");
  const calculateAndSetFinalCapital = () => {
    const newFinalCapital = calculateEndkapital(
      initialCapital,
      interestRate,
      duration,
      durationUnit,
      compoundInterest
    );
    setFinalCapital(newFinalCapital);
  };

  const pdfData: ZinsrechnerPdfData = {
    test1: "Zinsrechner",
    test2: "Form",
  };

  const downloadPdf = async (): Promise<void> => {
    console.log({ pdfData });
    const pdfDoc = pdf(<PdfDocument content={pdfData} />);
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start gap-5"
      >
        <h4 className="text-center">ZinsrechnerForm</h4>
        {/*  First line anfangskapital*/}
        <fieldset className="flex justify-start gap-5">
          <div className="flex gap-0.5 min-w-max">
            <label htmlFor="anfangskapital" className="inline-block">
              Anfangskapital
            </label>
            <Tooltip highlight="?" text="Anfangskapital erklärung" />
          </div>
          <div className="flex gap-0.5">
            <input
              name="anfangskapital"
              type="number"
              defaultValue={initialCapital}
              onChange={handleChange}
              className="w-fit border rounded-md text-right"
            />
            <span className="font-semibold">€</span>
          </div>
        </fieldset>
        {/*Zinssatz*/}
        <fieldset className="flex justify-start gap-5">
          <div className="flex gap-0.5">
            <label htmlFor="zinssatz" className="inline-block">
              Zinssatz
            </label>
            <Tooltip highlight="?" text="Zinssatz erklärung" />
          </div>
          <div className="flex gap-0.5">
            <input
              name="zinssatz"
              type="number"
              step="0.001"
              defaultValue={interestRate}
              onChange={handleChange}
              className="w-fit border rounded-md text-right"
            />
            <span className="font-semibold">% p.a.</span>
          </div>
        </fieldset>{" "}
        {/*Laufzeit*/}
        <fieldset className="flex justify-start gap-5">
          <div className="flex gap-0.5">
            <label htmlFor="laufzeit" className="inline-block">
              Laufzeit
            </label>
            <Tooltip highlight="?" text="Laufzeit erklärung" />
          </div>
          <div className="flex gap-0.5">
            <input
              name="laufzeit"
              type="number"
              defaultValue={duration}
              onChange={handleChange}
              className="w-fit border rounded-md text-right"
            />
            <select
              id="laufzeit"
              name="laufzeitUnit"
              onChange={handleChange}
              className="border rounded-md outline-none px-3 bg-white text-gray-800"
            >
              <option value="jahre">Jahre</option>
              <option value="monate">Monate</option>
            </select>
          </div>
        </fieldset>
        {/*Zinseszins*/}
        <fieldset className="flex justify-start gap-5">
          <div className="flex gap-0.5">
            <label htmlFor="zinseszins" className="inline-block">
              Zinseszins
            </label>
            <Tooltip highlight="?" text="Zinseszins erklärung" />
          </div>
          <div className="flex items-center gap-2">
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
        </fieldset>{" "}
        {/*Endkapital*/}
        <fieldset className="flex justify-start gap-5">
          <div className="flex gap-0.5">
            <label htmlFor="endkapital" className="inline-block">
              Endkapital
            </label>
            <Tooltip highlight="?" text="Endkapital erklärung" />
          </div>
          <div className="flex gap-0.5 items-center">
            <input
              disabled
              name="endkapital"
              defaultValue={finalCapital}
              type="number"
              className="w-fit border rounded-md text-right font-bold text-2xl"
            />
            <span>€</span>
          </div>
        </fieldset>
        <fieldset className="flex gap-10">
          <button className="btnrechnen" type="submit">
            Rechnen
          </button>
          <button className="btnrechnen" onClick={downloadPdf}>
            Generate PDF
          </button>
        </fieldset>
      </form>
    </div>
  );
};
