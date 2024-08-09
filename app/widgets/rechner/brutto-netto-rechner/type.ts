import { Control } from "react-hook-form";

export interface FormDataInputs {
  Einkommen: number;
  Bundesland: string;
  Period?: string;
  kirchensteuer: boolean;
  krankenversicherung: boolean;
}

export interface BundeslandSelectProps {
  control: Control<FormDataInputs>;
}
