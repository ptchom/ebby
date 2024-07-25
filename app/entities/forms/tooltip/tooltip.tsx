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
        type="button"
        className="rounded-md border-2 px-2"
      >
        {highlight}
      </button>

      {show && (
        <div
          id="tooltip-top"
          role="tooltip"
          className="absolute z-10 inline-block rounded-md border bg-white p-2 font-medium text-black shadow-md"
        >
          {tooltip}
          <div className="" data-popper-arrow="Tooltip"></div>
        </div>
      )}
    </div>
  );
};
