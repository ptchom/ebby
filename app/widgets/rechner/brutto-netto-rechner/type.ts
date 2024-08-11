import { Control } from "react-hook-form";

export interface FormDataInputs {
  nettoEinkommen: number;
  bundesland: string;
  lohnPeriod?: LohnPeriod;
  kirchensteuer: boolean;
  krankenversicherung: boolean;
  kinderfreiBetrag?: number;
}

export interface EinkommenInputProps {
  control: Control<FormDataInputs>;
  period: LohnPeriod; // Обновите тип
  handlePeriodChange: (newPeriod: LohnPeriod) => void; // Обновите тип
}

export interface BundeslandSelectProps {
  control: Control<FormDataInputs>;
}

export interface KinderinputsProps {
  control: Control<FormDataInputs>;
}

export interface ToggleSwitchKirchensteuerProps {
  name: string;
  label: string;
  control: Control<FormDataInputs>;
}

export interface ResultsDisplayProps {
  bruttoEinkommen?: number;
  lohnPeriod?: LohnPeriod;
  rentenVersicherungBetrag: number;
  krankenVersicherungBetrag: number;
  lohnsteuerBetrag: number;
  pflegeVersicherungBetrag: number;
  arbeitslosenVersicherungBetrag: number;
  kirchensteuerBetrag: number;
}

export enum LohnPeriod {
  Jahr = "Jahr",
  Monat = "Monat",
}
