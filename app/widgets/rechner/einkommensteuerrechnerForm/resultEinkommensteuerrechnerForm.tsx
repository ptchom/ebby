import { FC } from "react";

interface ResultIncomeTaxFormProps {
  yearlyIncome: number;
  isSingle: boolean;
  churchTax: number;
  year: number;
}

export const ResultIncomeTaxForm: FC<ResultIncomeTaxFormProps> = (props) => {
  const { yearlyIncome, isSingle, churchTax, year } = props;

  const incomeTax = yearlyIncome * 0.2; // примерное значение налога на доход
  const solidaritySurcharge = incomeTax * 0.055; // примерное значение доп. налога на солидарность
  const churchTaxAmount = incomeTax * (churchTax / 100); // примерное значение церковного налога
  const remainingIncome =
    yearlyIncome - incomeTax - solidaritySurcharge - churchTaxAmount;
  return (
    <div>
      <h1>Im Aufbau</h1>
      <p>
        Income Tax: {incomeTax} {yearlyIncome}
      </p>
      <p>Solidarity Surcharge: {solidaritySurcharge}</p>
      <p>Church Tax: {churchTax}</p>
      <p>Remaining Income: {remainingIncome}</p>
      <p>Income After Taxes: {remainingIncome}</p>
    </div>
  );
};
