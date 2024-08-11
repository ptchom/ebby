import { FC, useState } from "react";

export const SteuerklasseButtonRow: FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  return (
    <>
      {" "}
      <label htmlFor="Steuerklasse" className="inline-block">
        Steuerklasse
      </label>
      <div className="flex w-2/3 flex-row justify-between gap-2">
        {Array.from({ length: 6 }, (_, index) => (
          <button
            key={index}
            className={`rounded border-2 p-2 ${
              activeButton === index
                ? "border-teal-500 bg-teal-500 text-white"
                : hoveredButton === index
                  ? "border-teal-500 bg-teal-200 text-teal-500"
                  : "border-teal-500 text-teal-500"
            }`}
            onClick={() => setActiveButton(index)}
            onMouseEnter={() => setHoveredButton(index)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};
