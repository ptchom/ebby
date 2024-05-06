import { ChangeEvent, FormEvent, useState } from "react";
import { calculateEndkapital } from "~/rechner/zinsrechner-form/claculate";
import { Tooltip } from "~/components/forms/tooltip";
import { pdf, View, Text } from "@react-pdf/renderer";
import { PdfDocument } from "~/shared/pdf/pdf-document";

export const ZinsrechnerForm = () => {
  const [initialCapital, setInitialCapital] = useState<number>(1000);
  const [interestRate, setInterestRate] = useState<number>(1.23);
  const [duration, setDuration] = useState<number>(3);
  const [durationUnit, setDurationUnit] = useState("jahre"); // Новое состояние
  const [compoundInterest, setCompoundInterest] = useState<boolean>(true); // Новое состояние
  const [finalCapital, setFinalCapital] = useState<string>("");
  const buttonClass =
    "bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50";
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

  const MyTable = () => (
    <View>
      <Text>Cell 1</Text>
      <Text>Cell 2</Text>
      {/* и так далее */}
    </View>
  );

  const downloadPdf = async (): Promise<void> => {
    const PdfDoc = () => <PdfDocument content={<MyTable />} />;
    const pdfDoc = pdf(<PdfDoc />);
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
    <div className="my-5 p-2 rounded border border-amber-200">
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <h4>ZinsrechnerForm</h4>
        {/*  First line anfangskapital*/}
        <fieldset className="flex gap-4 rounded border border-red-500 p-1 m-1">
          <label htmlFor="anfangskapital" className="border-r border-gray-500">
            Anfangskapital
          </label>
          <input
            name="anfangskapital"
            type="number"
            defaultValue={initialCapital}
            onChange={handleChange}
            className="border-r border-gray-500"
          />
          <span className="border-r border-gray-500">€</span>
          <span className="border-r border-gray-500">?</span>
        </fieldset>
        {/*Zinssatz*/}
        <fieldset className="flex gap-4 rounded border border-red-500 p-1 m-1">
          <label htmlFor="zinssatz" className="border-r border-gray-500">
            Zinssatz
          </label>
          <input
            name="zinssatz"
            type="number"
            step="0.001"
            defaultValue={interestRate}
            onChange={handleChange}
            className="border-r border-gray-500"
          />
          <span className="border-r border-gray-500">% p.a.</span>
          <span className="border-r border-gray-500">?</span>
        </fieldset>
        {/*Laufzeit*/}
        <fieldset className="flex gap-4 rounded border border-red-500 p-1 m-1">
          <label htmlFor="laufzeit" className="border-r border-gray-500">
            Laufzeit
          </label>
          <input
            name="laufzeit"
            type="number"
            defaultValue={duration}
            onChange={handleChange}
            className="border-r border-gray-500"
          />
          <span className="border-r border-gray-500">
            <select id="laufzeit" name="laufzeitUnit" onChange={handleChange}>
              <option value="jahre">Jahre</option>
              <option value="monate">Monate</option>
            </select>
          </span>
          <span className="border-r border-gray-500 font-bold">?</span>
        </fieldset>
        {/*Zinseszins*/}
        <fieldset className="flex gap-4 rounded border border-red-500 p-1 m-1">
          <label htmlFor="zinseszins" className="border-r border-gray-500">
            Zinseszins
          </label>
          <div className="flex gap-2">
            <input
              type="radio"
              id="ja"
              name="janeinzinsansammlung"
              value="Ja, Zinsansammlung"
              onChange={handleChange}
              checked={compoundInterest}
            />
            <label htmlFor="ja">Ja</label>
            <input
              type="radio"
              id="nein"
              name="janeinzinsansammlung"
              value="Nein, Zinsauszahlung"
              onChange={handleChange}
              checked={!compoundInterest}
            />
            <label htmlFor="nein">Nein</label>
          </div>
          <span id="placeholder"></span>
          <span className="border-r border-gray-500 font-bold">?</span>
        </fieldset>
        {/*Endkapital*/}
        <fieldset className="flex gap-4 rounded border border-red-500 p-1 m-1">
          <label htmlFor="endkapital" className="border-r border-gray-500">
            Endkapital
          </label>
          <input
            name="endkapital"
            defaultValue={finalCapital}
            type="number"
            className="border-r border-gray-500 font-bold text-2xl"
          />
          <span className="border-r border-gray-500">€</span>
          <Tooltip highlight="?" text="endkapital erklärung" />
        </fieldset>
        <fieldset className="flex gap-10">
          <button className={buttonClass} type="submit">
            Rechnen
          </button>
          <button className={buttonClass} onClick={downloadPdf}>
            Generate PDF
          </button>
        </fieldset>
      </form>
    </div>
  );
};
