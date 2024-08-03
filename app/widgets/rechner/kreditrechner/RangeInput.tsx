import { Control, Controller } from "react-hook-form";

type RangeInputProps = {
  name: string;
  // eslint-disable-next-line
  control: Control<any>;
  min: number;
  max: number;
  step: number;
};

const RangeInput = ({ name, control, min, max, step }: RangeInputProps) => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              type="range"
              id={name}
              min={min}
              max={max}
              step={step}
              {...field}
              className="mt-6 w-full"
            />
            <div className="relative mt-8 flex w-full justify-between">
              {[...Array(7)].map((_, i) => (
                <span key={i} className="h-4 w-0.5 bg-gray-400"></span>
              ))}
            </div>
            <div className="absolute mt-10 flex w-full justify-between">
              <span>{min} €</span>
              <span>{max / 2} €</span>
              <span>{max} €</span>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default RangeInput;
