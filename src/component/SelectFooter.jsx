import React from "react";

function SelectFooter({ selectedItem }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] text-white px-6 py-4 border-t border-[#2a2a2a] shadow-md z-50">
      <div className="max-w-6xl mx-auto flex flex-col justify-between ">
        <p className="text-sm my-2 px-1 text-gray-400">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
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
              <p className="text-md text-gray-400">{selectedItem?.subtitle}</p>
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
  );
}

export default SelectFooter;
