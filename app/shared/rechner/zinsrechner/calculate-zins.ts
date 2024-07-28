import { ZinsrechnerUserData } from "~/widgets/rechner/zinsrechner-form/type";

export const calculateEndkapital = (props: ZinsrechnerUserData) => {
  const {
    initialCapital,
    interestRate,
    duration,
    durationUnit,
    compoundInterest,
  } = props;
  const durationToCalculate =
    durationUnit === "jahre" ? duration : duration / 12;

  const endkapital = compoundInterest
    ? initialCapital * Math.pow(1 + interestRate / 100, durationToCalculate)
    : initialCapital +
      ((initialCapital * interestRate) / 100) * durationToCalculate;

  return endkapital.toFixed(2);
};
