import { JSX } from "react";
import { Controller, useForm } from "react-hook-form";

import { NumberInput, RangeInput } from "./";

type Inputs = {
  amount: number;
  duration: number;
  interestRate: number;
};

const defaultValues: Inputs = {
  amount: 50000,
  duration: 60,
  interestRate: 6.9,
};

function KreditrechnerForm(): JSX.Element {
  const { control, handleSubmit, watch } = useForm<Inputs>({
    defaultValues,
  });

  const amount = watch("amount");
  const duration = watch("duration");
  const interestRate = watch("interestRate");

  const calculateMonthlyPayment = (
    amount: number,
    duration: number,
    interestRate: number,
  ): number => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = duration;
    return (
      (amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
    );
  };

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-start gap-5"
    >
      <div className="flex flex-col gap-0 border-2 border-gray-300 p-4">
        <label htmlFor="amount">Kreditbetrag (€)</label>
        <div className="flex gap-x-6">
          <RangeInput
            name="amount"
            control={control}
            min={0}
            max={100000}
            step={500}
          />
          <NumberInput name="amount" control={control} />
        </div>
      </div>

      <div>
        <label htmlFor="duration">Laufzeit (Monate)</label>
        <div className="flex gap-x-6">
          <RangeInput
            name="duration"
            control={control}
            min={0}
            max={120}
            step={6}
            unitType={"Monate"}
          />
          <NumberInput name="duration" control={control} />
        </div>
      </div>

      <div>
        <label htmlFor="interestRate">Effektiven Jahreszins (%)</label>
        <div className="flex gap-x-6">
          <RangeInput
            name="interestRate"
            control={control}
            min={0}
            max={20}
            step={0.1}
            unitType={"%"}
          />
          <NumberInput name="interestRate" control={control} />
        </div>
      </div>

      <label htmlFor="result">Das brauchen Sie im Monat:</label>
      <div id="result">
        {amount && duration && interestRate && (
          <span>
            {calculateMonthlyPayment(amount, duration, interestRate).toFixed(2)}{" "}
            €
          </span>
        )}
      </div>
    </form>
  );
}

export default KreditrechnerForm;
