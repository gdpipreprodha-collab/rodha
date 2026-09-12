import React from "react";

export default function ComparisonTable() {
  const features = [
    "Full Length CAT Mocks",
    "OMETs Full Length Mocks\n(NMAT, SNAP, & XAT)",
    "CAT Sectional Tests",
    "Video Solutions",
    "CAT Topic Tests\n(VARC, LRDI & QA)",
    "Percentile Tracker",
  ];

  const plans = [
    {
      name: "RODHA CAT &\nOMETs Package",
      values: ["30", "50", "105", "✔", "40+", "✔"],
    },
    {
      name: "RODHA CAT Mocks &\nSectional Tests",
      values: ["30", "✕", "105", "✔", "40+", "✔"],
    },
    {
      name: "RODHA\nCAT Mocks",
      values: ["30", "✕", "✕", "✔", "✕", "✔"],
    },
    {
      name: "RODHA\nSectional Tests",
      values: ["✕", "✕", "105", "✔", "40+", "✔"],
    },
    {
      name: "Mini Mocks",
      values: ["15", "✕", "✕", "✔", "✔", "✔"],
    },
    {
      name: "Mini Sectionals",
      values: ["✕", "✕", "60", "✔", "✔", "✔"],
    },
    {
      name: "Mini Combo",
      values: ["10", "✕", "30", "✔", "✔", "✔"],
    },
    {
      name: "Individual Sectionals",
      values: ["✕", "✕", "35", "✔", "✔", "✔"],
    },
  ];

  return (
    <div className="w-full bg-white px-1 py-12 dark:bg-[#242424] sm:px-3">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <table className="w-full table-fixed border-separate border-spacing-1 text-[6px] transition-all duration-300 sm:text-[8px] md:text-[11px] lg:text-sm">
          <colgroup>
            <col className="w-[18%]" />
            {plans.map((plan) => (
              <col key={plan.name} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th className="rounded bg-black px-0.5 py-2 text-center font-semibold leading-tight text-white whitespace-pre-line sm:rounded-md sm:px-1 md:rounded-lg md:py-3">
                Products & Features
              </th>
              {plans.map((plan, i) => (
                <th
                  key={i}
                  className="rounded bg-black px-0.5 py-2 text-center font-semibold leading-tight text-white whitespace-pre-line sm:rounded-md sm:px-1 md:rounded-lg md:py-3"
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, rowIdx) => (
              <tr key={rowIdx}>
                <td className="rounded bg-[#3e3e3e] px-0.5 py-3 text-center font-medium leading-tight text-white whitespace-pre-line sm:rounded-md sm:px-1 md:rounded-lg md:px-2 md:py-4">
                  {feature}
                </td>
                {plans.map((plan, colIdx) => {
                  const value = plan.values[rowIdx];
                  const isCheck = value === "✔";
                  const isCross = value === "✕";
                  const isHighlightedColumn = colIdx % 2 === 1;

                  const bgColor = isHighlightedColumn
                    ? "bg-[#262626] dark:bg-[#242424] border border-[#5b5b5b]"
                    : "bg-[#FFECE0] dark:bg-[#FDFDFD]";

                  const textColor =
                    isCheck || isCross
                      ? "text-[#FF6B00]"
                      : isHighlightedColumn
                      ? "text-white dark:text-white"
                      : "text-[#000] dark:text-black";

                  return (
                    <td
                      key={colIdx}
                      className={`h-14 rounded px-0.5 py-3 text-center font-semibold leading-tight whitespace-pre-line sm:h-16 sm:rounded-md sm:px-1 md:h-20 md:rounded-lg md:px-2 md:py-4 ${bgColor} ${textColor}`}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
