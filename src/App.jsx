import { useState } from "react";

import "./App.css";

import ItemHeader from "./component/ItemHeader.jsx";
import { skipData } from "./shared/data.js";
import { FileWarning, TriangleAlert } from "lucide-react";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className=" w-full pb-40 px-4">
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
            onClick={() => {
              if (selectedItem?.id === item.id) {
                setSelectedItem(null);
              } else {
                setSelectedItem(item);
              }
            }}
            className={`cursor-pointer  relative flex flex-col p-6 bg-[#1a1a1a] text-white border border-[#2a2a2a] rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden ${
              selectedItem?.id === item?.id
                ? "border-blue-700 border-2"
                : "hover:border-blue-900"
            }`}
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

              {!item?.isAllowedRoad && (
                <div className=" absolute  top-55 left-9 flex align-items-center bg-black px-3 py-1 rounded-lg text-yellow-500">
                  <TriangleAlert className=" m-auto" size={18} />
                  <span className=" text-yellow-500  text-sm  px-3 py-1 rounded-full z-10">
                    Not Allowed On The Road
                  </span>
                </div>
              )}
            </div>

            {/* Content */}

            <div className="mt-5 ">
              <h3 className="text-xl font-bold  text-start  mb-1">
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
            <div
              // onClick={() => setSelectedItem(item)}
              className={`mt-4 cursor-pointer w-full bg-[#2a2a2a]   text-white py-3 rounded-lg text-md font-medium transition-colors ${
                selectedItem?.id === item.id
                  ? "bg-blue-700 hover:bg-blue-800"
                  : "hover:bg-[#3a3a3a]"
              }`}
            >
              {selectedItem?.id === item.id ? "Selected" : "Select This Skip →"}
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] text-white px-6 py-4 border-t border-[#2a2a2a] shadow-md z-50">
          <div className="max-w-6xl mx-auto flex flex-col justify-between ">
            <p className="text-sm my-2 px-1 text-gray-400">
              Imagery and information shown throughout this website may not
              reflect the exact shape or size specification, colours may vary,
              options and/or accessories may be featured at additional cost.
            </p>

            <div className="md:flex justify-between w-full mt-4">
              <div className="flex justify-between items-center ">
                <p className=" sm:text-white md:text-gray-400 md:text-md text-lg">
                  {selectedItem.yards} Yard Skip
                </p>
                <div className="flex items-center mx-2">
                  <p className="text-2xl mx-3 font-semibold text-blue-700">
                    £{selectedItem.value}
                  </p>
                  <p className="text-md text-gray-400">14 day hire</p>
                </div>
              </div>

              <div className="flex gap-2 md:w-1/2">
                <div className="mt-4 w-100   sm:mt-0 cursor-pointer bg-[#2a2a2a]  text-white px-6 py-2 rounded-lg font-semibold transition">
                  Back
                </div>
                <div className="mt-4 w-100  sm:mt-0 cursor-pointer bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition">
                  Continue →
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
