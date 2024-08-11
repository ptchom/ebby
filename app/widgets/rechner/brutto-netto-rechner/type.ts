import { Control } from "react-hook-form";

export interface FormDataInputs {
  Einkommen: number;
  Bundesland: string;
  Period?: string;
  kirchensteuer: boolean;
  krankenversicherung: boolean;
  Kinder?: number;
}

export interface BundeslandSelectProps {
  control: Control<FormDataInputs>;
}

export interface EinkommenInputProps {
  control: Control<FormDataInputs>;
  period: string;
  handlePeriodChange: (newPeriod: string) => void;
}

export interface KinderinputsProps {
  control: Control<FormDataInputs>;
}

export interface ToggleSwitchProps {
  name: keyof FormDataInputs;
  label: string;
  control: Control<FormDataInputs>;
}

export interface ResultsDisplayProps {
  formData: {
    Einkommen?: number;
    Period?: string;
  } | null;
}
