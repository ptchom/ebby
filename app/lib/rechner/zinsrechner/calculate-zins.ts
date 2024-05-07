export const calculateEndkapital = (
  anfangskapital: number,
  zinssatz: number,
  laufzeit: number,
  laufzeitUnit: string,
  zinseszins: boolean = true
) => {
  laufzeit = laufzeitUnit === "jahre" ? laufzeit : laufzeit / 12;

  const endkapital = zinseszins
    ? anfangskapital * Math.pow(1 + zinssatz / 100, laufzeit)
    : anfangskapital + ((anfangskapital * zinssatz) / 100) * laufzeit;

  return endkapital.toFixed(2);
};
