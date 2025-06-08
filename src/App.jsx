import { useState } from "react";

import "./App.css";

import ItemHeader from "./component/ItemHeader.jsx";
import { skipData } from "./shared/data.js";
import SelectFooter from "./component/SelectFooter.jsx";
import ItemCard from "./component/ItemCard.jsx";

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

      {/* Item Card */}
      <div className="mt-4 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skipData?.map((item, index) => (
          <ItemCard
            key={index}
            item={item}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </div>

      {selectedItem && <SelectFooter selectedItem={selectedItem} />}
    </div>
  );
}

export default App;
