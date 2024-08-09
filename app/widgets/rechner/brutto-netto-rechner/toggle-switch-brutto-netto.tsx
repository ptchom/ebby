import { FC } from "react";
import { Control, Controller } from "react-hook-form";

interface ToggleSwitchProps {
  name: string;
  label: string;
  control: Control<any>; // Уточните тип в зависимости от вашей формы
}

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
