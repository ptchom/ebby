export type ZinsrechnerUserData = {
  initialCapital: number;
  interestRate: number;
  duration: number;
  durationUnit: string; // "jahre" | "monate" ?
  compoundInterest: boolean;
};
