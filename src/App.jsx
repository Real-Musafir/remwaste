import { useState } from "react";

import "./App.css";

import ItemHeader from "./component/ItemHeader.jsx";
import { skipData } from "./shared/data.js";
import { FileWarning, Slash, TriangleAlert } from "lucide-react";
import SelectFooter from "./component/SelectFooter.jsx";

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

              {/* Selected slash */}
              {selectedItem?.id === item?.id && (
                <div className="absolute top-3 right-1  text-white text-sm font-semibold px-3 py-1 rounded-full ">
                  <Slash className="text-blue-700" size={18} />
                </div>
              )}

              <img
                src={item?.url}
                alt={`${item?.yards} Yard Skip`}
                className="w-full z-2 h-full object-cover rounded-md"
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
                {item?.subtitle}
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

      {selectedItem && <SelectFooter selectedItem={selectedItem} />}
    </div>
  );
}

export default App;
