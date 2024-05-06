import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { calculateEndkapital } from "~/rechner/zinsrechner-form/claculate";
import { Tooltip } from "~/components/forms/tooltip";
import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "~/shared/pdf/my-document";

export const ZinsrechnerForm = () => {
  const [anfangskapital, setAnfangskapital] = useState<number>(1000);
  const [zinssatz, setZinssatz] = useState<number>(1.23);
  const [laufzeit, setLaufzeit] = useState<number>(3);
  const [laufzeitUnit, setLaufzeitUnit] = useState("jahre"); // Новое состояние
  const [zinseszins, setZinseszins] = useState<boolean>(true); // Новое состояние
  const [endkapital, setEndkapital] = useState<string>("");
  const btnClas =
    "bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50";
  const [showPdf, setShowPdf] = useState(false);
  const generatePdf = () => {
    setShowPdf((prevState) => !prevState);
  };
  useEffect(() => {
    const newEndkapital = calculateEndkapital(
      anfangskapital,
      zinssatz,
      laufzeit,
      laufzeitUnit,
      zinseszins
    );
    setEndkapital(newEndkapital);
  }, [anfangskapital, laufzeit, zinssatz, laufzeitUnit, zinseszins]);

  const handleChange = (
    changeEvent: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    if (changeEvent.target.name === "anfangskapital") {
      setAnfangskapital(Number(changeEvent.target.value));
    } else if (changeEvent.target.name === "zinssatz") {
      setZinssatz(Number(changeEvent.target.value));
    } else if (changeEvent.target.name === "laufzeit") {
      setLaufzeit(Number(changeEvent.target.value));
    } else if (changeEvent.target.name === "laufzeitUnit") {
      setLaufzeitUnit(changeEvent.target.value);
    } else if (changeEvent.currentTarget.name === "janeinzinsansammlung") {
      setZinseszins(changeEvent.currentTarget.value === "Ja, Zinsansammlung");
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // ...дальнейшие действия
  };
  return (
    <div className="my-5 p-2 rounded border border-amber-200">
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <h3>Zinsrechner</h3>
        {/*  First line anfangskapital*/}
        <fieldset className="flex gap-4 rounded border border-red-500 p-1 m-1">
          <label htmlFor="anfangskapital" className="border-r border-gray-500">
            Anfangskapital
          </label>
          <input
            name="anfangskapital"
            type="number"
            defaultValue={anfangskapital}
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
            defaultValue={zinssatz}
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
            defaultValue={laufzeit}
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
        {/*Endkapital*/}
        <fieldset className="flex gap-4 rounded border border-red-500 p-1 m-1">
          <label htmlFor="endkapital" className="border-r border-gray-500">
            Endkapital
          </label>
          <input
            name="endkapital"
            defaultValue={endkapital}
            type="number"
            className="border-r border-gray-500"
          />
          <span className="border-r border-gray-500">€</span>
          <Tooltip highlight="?" text="endkapital erklärung" />
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
              checked={zinseszins}
            />
            <label htmlFor="ja">Ja</label>
            <input
              type="radio"
              id="nein"
              name="janeinzinsansammlung"
              value="Nein, Zinsauszahlung"
              onChange={handleChange}
              checked={!zinseszins}
            />
            <label htmlFor="nein">Nein</label>
          </div>
          <span id="placeholder"></span>
          <span className="border-r border-gray-500 font-bold">?</span>
        </fieldset>
        <fieldset>
          <button className={btnClas} onClick={generatePdf}>
            Generate PDF
          </button>
        </fieldset>
      </form>
      <div>
        {showPdf && (
          <PDFViewer width="600" height="800">
            <MyDocument />
          </PDFViewer>
        )}
      </div>
    </div>
  );
};
