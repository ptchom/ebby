import { FC, useState } from "react";

export const SparrechnerForm: FC = () => {
  const [startkapital, setStartkapital] = useState<number>(0);
  const [monatlicheEinzahlung, setMonatlicheEinzahlung] = useState<number>(0);
  const [zinssatz, setZinssatz] = useState<number>(0);
  const [laufzeit, setLaufzeit] = useState<number>(0);
  const [endkapital, setEndkapital] = useState<number>(0);

  const berechneSparplan = (): void => {
    let gesamt: number = startkapital;
    const monatlicherZinssatz: number = zinssatz / 100 / 12;
    const monate: number = laufzeit * 12;

    for (let i = 0; i < monate; i++) {
      gesamt = (gesamt + monatlicheEinzahlung) * (1 + monatlicherZinssatz);
    }

    setEndkapital(parseFloat(gesamt.toFixed(2)));
  };

  return (
    <div>
      <h2>Sparrechner</h2>
      <div>
        <label>Startkapital:</label>
        <input
          type="number"
          value={startkapital}
          onChange={(e) => setStartkapital(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Monatliche Einzahlung:</label>
        <input
          type="number"
          value={monatlicheEinzahlung}
          onChange={(e) => setMonatlicheEinzahlung(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Jährlicher Zinssatz (%):</label>
        <input
          type="number"
          value={zinssatz}
          onChange={(e) => setZinssatz(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Laufzeit (Jahre):</label>
        <input
          type="number"
          value={laufzeit}
          onChange={(e) => setLaufzeit(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={berechneSparplan}>Berechnen</button>
      <h3>Endkapital: {endkapital} EUR</h3>
    </div>
  );
};
