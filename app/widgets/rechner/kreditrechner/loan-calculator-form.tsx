import { JSX, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { CustomField } from "~/widgets/rechner/kreditrechner/customField";
import { KreditrechnerErgebnisse } from "~/widgets/rechner/kreditrechner/kreditrechnerErgebnisse";
import { LoanFormInputs } from "~/widgets/rechner/kreditrechner/types";

const defaultValues: LoanFormInputs = {
  amount: 50000,
  duration: 60,
  interestRate: 6.9,
};

export function LoanCalculatorForm(): JSX.Element {
  const { control, handleSubmit, watch } = useForm<LoanFormInputs>({
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
