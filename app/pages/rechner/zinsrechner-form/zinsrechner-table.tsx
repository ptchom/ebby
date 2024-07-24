import { FC } from "react";

import { ZinsrechnerUserData } from "~/pages/rechner/zinsrechner-form/type";

type YearData = {
  year: number;
  initial: number;
  interest: number;
  totalInterest: number;
  final: number;
};

export const ZinsrechnerTable: FC<ZinsrechnerUserData> = ({
  initialCapital,
  interestRate,
  duration,
  durationUnit,
  compoundInterest,
}) => {
  // Подготовка массива с данными по годам
  const data: YearData[] = [];
  for (let year = 0; year < duration; year++) {
    const initial = year === 0 ? initialCapital : data[year - 1].final;
    const interest = (initial * interestRate) / 100;
    const totalInterest =
      (year === 0 ? 0 : data[year - 1].totalInterest) + interest;
    const final = initial + interest;

    data.push({ year: year + 1, initial, interest, totalInterest, final });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Jahr</th>
          <th>Angelegtes Kapital zu Jahresbeginn</th>
          <th>Zinsen</th>
          <th>Zinsen gesamt</th>
          <th>Kapital inkl. Zinsen am Jahresende</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ year, initial, interest, totalInterest, final }) => (
          <tr key={year}>
            <th>{year}</th>
            <td>{initial.toFixed(2)}</td>
            <td>{interest.toFixed(2)}</td>
            <td>{totalInterest.toFixed(2)}</td>
            <td>{final.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
