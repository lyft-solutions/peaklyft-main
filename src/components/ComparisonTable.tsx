"use client";

import React from "react";

type ComparisonData = {
  headings: string[];
  features: {
    name: string;
    values: boolean[];
  }[];
};

type Props = {
  data: ComparisonData;
};

const ComparisonTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="container w-full py-10">
      <h2 className="font mb-10">
        Why Choose <span className="text-primary">Peaklyft</span> Over Others?
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left py-4 px-6 bg-main font-semibold sticky left-0 z-20">
                Features
              </th>
              {data.headings.map((head, index) => (
                <th
                  key={index}
                  className="text-center py-4 px-6 bg-main font-semibold whitespace-nowrap"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.features.map((item, i) => (
              <tr
                key={i}
                className="odd:bg-input even:bg-main rounded-l-[40px]"
              >
                <td className="py-4 px-6 font-medium text-gray-900 rounded-l-[40px] sticky left-0 bg-inherit z-10">
                  {item.name}
                </td>

                {item.values.map((isTrue, j) => {
                  const isLast = j === item.values.length - 1;

                  return (
                    <td
                      key={j}
                      className={`text-center py-4 px-6 ${isLast ? "rounded-r-[40px]" : ""}`}
                    >
                      {isTrue ? (
                        <span className="text-xl flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <circle
                              cx="11"
                              cy="11"
                              r="11"
                              fill="#B9DFAE"
                            ></circle>
                            <path
                              d="M16.0482 6.45161C16.4011 6.08891 16.9838 6.08888 17.3368 6.45155C17.6765 6.80059 17.6765 7.35669 17.3368 7.70573L9.77544 15.4742C9.38279 15.8776 8.73468 15.8776 8.34211 15.4741L5.24157 12.2874C4.9019 11.9383 4.90195 11.3822 5.24169 11.0332C5.59471 10.6705 6.1774 10.6705 6.53042 11.0332L8.34367 12.8961C8.73629 13.2995 9.38436 13.2995 9.77694 12.896L16.0482 6.45161Z"
                              fill="#3B9C21"
                            ></path>
                          </svg>
                        </span>
                      ) : (
                        <span className="text-xl flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <circle
                              cx="11"
                              cy="11"
                              r="11"
                              fill="#EDB2B2"
                            ></circle>
                            <path
                              d="M16.0645 15.0675C16.581 14.5519 16.5814 13.715 16.0654 13.1989L15.1829 12.3162C14.1803 11.3134 14.1802 9.68783 15.1827 8.68496L16.0657 7.80162C16.5811 7.28607 16.5812 6.45043 16.066 5.9347C15.5504 5.41855 14.714 5.41829 14.198 5.93412L13.3153 6.81674C12.3123 7.81949 10.6864 7.81942 9.68357 6.81657L8.80125 5.93425C8.28533 5.41833 7.44882 5.41848 6.93309 5.93458C6.41768 6.45035 6.41775 7.28622 6.93325 7.80191L7.81599 8.68498C8.81851 9.68786 8.81851 11.3135 7.81599 12.3163L6.93382 13.1988C6.41811 13.7147 6.41834 14.551 6.93432 15.0667C7.45018 15.5822 8.28624 15.5819 8.80182 15.0662L9.68335 14.1843C10.6862 13.1811 12.3125 13.1811 13.3153 14.1843L14.1972 15.0665C14.7127 15.5822 15.5485 15.5826 16.0645 15.0675Z"
                              fill="#F24822"
                            ></path>
                          </svg>
                        </span>
                      )}
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
};

export default ComparisonTable;
