import { Control, FieldValues } from "react-hook-form";

export type LoanFormInputs = {
  amount: number;
  duration: number;
  interestRate: number;
};

export interface FieldProps {
  title: string;
  name: string;
  control: Control<LoanFormInputs>;
  min: number;
  max: number;
  step: number;
  unitType: string;
}

export interface KreditrechnerErgebnisseProps {
  amount: number;
  duration: number;
  interestRate: number;
  monthlyPayment: number;
  overpayment: number;
  totalPayment: number;
}

export type RangeInputProps = {
  name: string;
  control: Control<FieldValues>;
  min: number;
  max: number;
  step: number;
  unitType: string;
};

export type NumberInputProps = {
  name: string;
  control: Control<FieldValues>;
  unitType?: string;
};
