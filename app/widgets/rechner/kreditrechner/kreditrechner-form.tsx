import { FC, JSX, useEffect, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";

import { KreditrechnerErgebnisse } from "~/widgets/rechner/kreditrechner/kreditrechnerErgebnisse";

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

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [overpayment, setOverpayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const amount = watch("amount");
  const duration = watch("duration");
  const interestRate = watch("interestRate");

  useEffect(() => {
    const calculateMonthlyPayment = (
      amount: number,
      duration: number,
      interestRate: number,
    ): number => {
      const monthlyRate = interestRate / 100 / 12;
      return (
        (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -duration))
      );
    };

    const calculateTotalPayment = (
      amount: number,
      duration: number,
      interestRate: number,
    ): number => {
      const monthlyPayment = calculateMonthlyPayment(
        amount,
        duration,
        interestRate,
      );
      return monthlyPayment * duration;
    };

    const calculateOverpayment = (
      amount: number,
      duration: number,
      interestRate: number,
    ): number => {
      return calculateTotalPayment(amount, duration, interestRate) - amount;
    };

    if (amount && duration && interestRate) {
      setMonthlyPayment(
        calculateMonthlyPayment(amount, duration, interestRate),
      );
      setTotalPayment(calculateTotalPayment(amount, duration, interestRate));
      setOverpayment(calculateOverpayment(amount, duration, interestRate));
    }
  }, [amount, duration, interestRate]);

  return (
    <form className="flex flex-col justify-start gap-6">
      <CustomField
        title="Kreditbetrag"
        name="amount"
        control={control}
        min={0}
        max={100000}
        step={500}
        unitType={"€"}
      />

      <CustomField
        title="Laufzeit"
        name="duration"
        control={control}
        min={0}
        max={120}
        step={6}
        unitType={"Monate"}
      />

      <CustomField
        title="Effektiven Jahreszins"
        name="interestRate"
        control={control}
        min={0}
        max={20}
        step={0.1}
        unitType={"%"}
      />
      <KreditrechnerErgebnisse
        amount={amount}
        duration={duration}
        interestRate={interestRate}
        monthlyPayment={monthlyPayment}
        overpayment={overpayment}
        totalPayment={totalPayment}
      />
    </form>
  );
}

interface FieldProps {
  title: string;
  name: string;
  control: Control<Inputs>;
  min: number;
  max: number;
  step: number;
  unitType: string;
}

const CustomField: FC<FieldProps> = ({
  title,
  name,
  control,
  min,
  max,
  step,
  unitType,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-base font-medium">
        {title}
      </label>
      <div className="block gap-x-6 md:flex">
        <RangeInput
          name={name}
          control={control}
          min={min}
          max={max}
          step={step}
          unitType={unitType}
        />
        <NumberInput name={name} control={control} unitType={unitType} />
      </div>
    </div>
  );
};

export default KreditrechnerForm;
