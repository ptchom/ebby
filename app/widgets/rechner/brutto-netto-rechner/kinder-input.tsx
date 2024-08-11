import { FC } from "react";
import { Controller } from "react-hook-form";

import { KinderinputsProps } from "~/widgets/rechner/brutto-netto-rechner/type";

export const KinderInput: FC<KinderinputsProps> = ({ control }) => {
  return (
    <div>
      KinderInput
      <Controller
        name="Kinder"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="number" // Поле ввода для числа
            placeholder="Anzahl der Kinder"
            className="border p-2"
          />
        )}
      />
    </div>
  );
};
