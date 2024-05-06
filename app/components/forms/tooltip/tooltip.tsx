import { ReactNode, useState } from "react";

type TooltipProps = {
  highlight?: ReactNode;
  text: string;
};
const debug = false;
const test =
  "lorem ipsum className=mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

export const Tooltip = ({ highlight = "?", text = test }: TooltipProps) => {
  const [show, setShow] = useState(false);
  let tooltip = text;
  if (debug) tooltip = test;
  return (
    <div>
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        data-tooltip-target="tooltip-top"
        // data-tooltip-placement="top"
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {highlight}
      </button>

      {show && (
        <div
          id="tooltip-top"
          role="tooltip"
          className="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700"
        >
          {tooltip}
          <div className="tooltip-arrow" data-popper-arrow="Tooltip"></div>
        </div>
      )}
    </div>
  );
};
