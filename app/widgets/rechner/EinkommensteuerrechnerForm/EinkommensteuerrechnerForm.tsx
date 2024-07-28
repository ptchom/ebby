import { ChangeEvent, FormEvent, useState } from "react";

import { currentYear } from "~/shared/date/currentYear";

export const EinkommensteuerrechnerForm = () => {
  const [yearlyIncome, setYearlyIncome] = useState<number>(38000);
  const [isSingle, setIsSingle] = useState<boolean>(true);
  const [churchTax, setChurchTax] = useState<number>(0);
  const [year, setYear] = useState<number>(currentYear);

  const toggleIsSingle = () => {
    setIsSingle(!isSingle);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (
    changeEvent: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (changeEvent.target.name === "yearlyIncome") {
      setYearlyIncome(Number(changeEvent.target.value));
    }
    if (changeEvent.target.name === "churchTax") {
      setChurchTax(Number(changeEvent.target.value));
    }
  };

  const divideLine = (
    <hr className="col-span-3 my-2 border-t border-black opacity-50" />
  );

  return (
    <form
      className="mx-auto mb-5 grid grid-cols-3 gap-1 rounded-lg border-2 border-gray-400/5 p-0.5 shadow-xl sm:text-xl md:p-5"
      onSubmit={handleSubmit}
    >
      {/* First line yearly income */}
      <label htmlFor="yearlyIncome" className="inline-block">
        Jahreseinkommen
      </label>
      <div className="col-span-2 flex gap-2">
        <input
          name="yearlyIncome"
          type="number"
          id="yearlyIncome"
          defaultValue={yearlyIncome}
          onChange={handleChange}
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
            name="isSingle"
            id="isSingle"
            onChange={toggleIsSingle}
            checked={isSingle}
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
          {isSingle ? "Einzeln" : "Getrennt"}
        </span>
      </div>
      {divideLine}

      {/*churchTax*/}
      <label htmlFor="churchTax" className="flex items-center">
        Kirchensteuer:
      </label>
      <select
        id="churchTax"
        name="churchTax"
        onChange={handleChange}
        className=" rounded-md border bg-white px-1 text-gray-800 outline-none"
      >
        <option value="0">Kein Kirchensteuer</option>
        <option value="8">8 % (Baden-Württemberg und Bayern)</option>
        <option value="9">9 % (übrige Bundesländer)</option>
      </select>
      {divideLine}

      {/*Jahr*/}
      <label htmlFor="Jahr" className="flex items-center">
        Jahr:
      </label>
      <select
        id="year"
        name="year"
        onChange={handleChange}
        value={year}
        className="rounded-md border bg-white px-1 text-gray-800 outline-none"
      >
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
      {divideLine}
    </form>
  );
};
