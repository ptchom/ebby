import { FC } from "react";
import { Controller } from "react-hook-form";

import { KinderinputsProps } from "./type";

export const KinderInput: FC<KinderinputsProps> = ({ control }) => {
  return (
    <div>
      <label htmlFor="kinderfreiBetrag" className="inline-block">
        Anzahl der Kinder
      </label>
      <Controller
        name="kinderfreiBetrag"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="number"
            placeholder="Anzahl der Kinder"
            className="border p-2"
          />
        )}
      />
    </div>
  );
};
