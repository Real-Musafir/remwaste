import { useState } from "react";

import "./App.css";

import ItemHeader from "./component/ItemHeader.jsx";
import { skipData } from "./shared/data.js";

function App() {
  return (
    <div className=" w-full  px-4">
      {/* header */}
      <ItemHeader currentStep={2} />

      <p className="text-2xl text-white font-semibold mt-5">
        Choose Your Skip Size
      </p>
      <p className="text-lg text-gray-400 mt-3">
        Select the skip size that best suits your needs
      </p>

      <div className="mt-4 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skipData?.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col p-6 bg-[#1a1a1a] text-white border border-[#2a2a2a] rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-60 flex items-center justify-center overflow-hidden">
              {/* Badge */}
              <span className="absolute top-10 right-9 bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full z-10">
                {item?.yards} Yards
              </span>

              <img
                src={item?.url}
                alt={`${item?.yards} Yard Skip`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Content */}

            <div className="mt-5 ">
              <h3 className="text-lg font-bold  text-start  mb-1">
                {item?.yards} Yard Skip
              </h3>
              <p className="text-sm text-start text-gray-400 mb-2">
                14 day hire period
              </p>
              <p className="text-xl mt-6 font-bold text-start text-blue-700">
                £{item?.value}
              </p>
            </div>

            {/* */}
            <div className="mt-4 cursor-pointer w-full bg-[#2a2a2a]  hover:bg-[#3a3a3a] text-white py-3 rounded-lg text-md font-medium transition-colors">
              Select This Skip →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
