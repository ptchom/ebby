// numberInput.tsx
import { Control, Controller } from "react-hook-form";

type NumberInputProps = {
  name: string;
  // eslint-disable-next-line
  control: Control<any>;
  unitType?: string;
};

export const NumberInput = ({
  name,
  control,
  unitType = "€",
}: NumberInputProps) => {
  return (
    <div className="flex flex-row items-center gap-x-1">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="number"
            value={field.value}
            onChange={(e) => field.onChange(Number(e.target.value))}
            className="w-24 rounded border border-gray-300 text-right"
          />
        )}
      />
      <span className="">{unitType}</span>
    </div>
  );
};
