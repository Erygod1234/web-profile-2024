import React from "react";
import Card from "./common/Card";

type Props = {};

const Education = (props: Props) => {
  return (
    <Card title="Education">
      <div className="relative border-l-4 border-blue-500">
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-blue-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">
              January 2021
            </time>
            <h2 className="mb-2 text-sm font-semibold">Walailak University</h2>
            <div className="mb-2 text-sm font-semibold">GPAX 3.84</div>
          </div>
        </div>
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-blue-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">
              March 2015
            </time>
            <h2 className="mb-2 text-sm font-semibold">Phatthalung School</h2>
            <div className="mb-2 text-sm font-semibold">GPAX 3.26</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Education;
