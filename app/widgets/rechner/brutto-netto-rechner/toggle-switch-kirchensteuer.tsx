import { FC } from "react";
import { Control, Controller } from "react-hook-form";

import { FormDataInputs } from "~/widgets/rechner/brutto-netto-rechner/type";

interface ToggleSwitchKirchensteuerProps {
  control: Control<FormDataInputs>;
}

export const ToggleSwitchKirchensteuer: FC<ToggleSwitchKirchensteuerProps> = ({
  control,
}) => {
  return (
    <div className="flex items-center">
      <label htmlFor="kirchensteuer" className="mr-2">
        Kirchensteuer
      </label>
      <Controller
        name="kirchensteuer"
        control={control}
        render={({ field }) => (
          <input
            id="kirchensteuer"
            type="checkbox"
            checked={field.value}
            onChange={(e) => field.onChange(e.target.checked)} // Update field value on change
            className="size-5 text-teal-500"
          />
        )}
      />
    </div>
  );
};
