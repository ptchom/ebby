import { JSX } from "react";

import { KreditrechnerErgebnisseProps } from "./types";

export function KreditrechnerErgebnisse(
  props: KreditrechnerErgebnisseProps,
): JSX.Element | null {
  const {
    amount,
    duration,
    interestRate,
    monthlyPayment,
    overpayment,
    totalPayment,
  } = props;

  const isValid =
    !isNaN(monthlyPayment) && !isNaN(totalPayment) && !isNaN(overpayment);

  return isValid ? (
    <div className="flex flex-col gap-4 text-base font-medium md:text-lg lg:text-xl">
      <label htmlFor="monthlyPayment" className="block ">
        Das zahlen Sie monatlich an die Bank zurück, plus Versicherung:
      </label>
      <div className="w-fit border-2 border-red-500 p-4">
        <div id="monthlyPayment">
          <span className="text-3xl font-semibold text-red-600 md:text-5xl">
            {monthlyPayment.toFixed(2)} €
          </span>
        </div>
      </div>
      <p className="leading-relaxed text-teal-900">
        Wenn Sie <strong>{amount}€</strong> zu einem Zinssatz von{" "}
        <strong>{interestRate}%</strong> für <strong>{duration} Monate</strong>{" "}
        leihen, zahlen Sie monatlich{" "}
        <strong>{monthlyPayment.toFixed(2)}€</strong> und insgesamt{" "}
        <strong>{totalPayment.toFixed(2)}€</strong> über die gesamte Laufzeit.
        Die Gesamtzinsen, die Sie zahlen, betragen{" "}
        <strong>{overpayment.toFixed(2)}€</strong>.
      </p>
    </div>
  ) : null;
}
