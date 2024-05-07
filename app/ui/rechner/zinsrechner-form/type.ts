export type ZinsrechnerPdfData = {
  initialCapital: number;
  interestRate: number;
  duration: number;
  durationUnit: string; // "jahre" | "monate" ?
  compoundInterest: boolean;
};
