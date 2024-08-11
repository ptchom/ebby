import { FC } from "react";
import { Controller } from "react-hook-form";

import { ToggleSwitchProps } from "~/widgets/rechner/brutto-netto-rechner/type";

export const ToggleSwitchBruttoNetto: FC<ToggleSwitchProps> = ({
  name,
  label,
  control,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <label className="flex items-center">
            <input
              type="checkbox"
              {...field}
              checked={field.value}
              className="size-5 text-teal-500"
            />
            <span className="ml-2">{label}</span>
          </label>
        )}
      />
    </div>
  );
};
