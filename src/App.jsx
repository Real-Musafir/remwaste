import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import {
  Calendar,
  CreditCard,
  MapPin,
  Shield,
  Trash2,
  Truck,
} from "lucide-react";

function App() {
  return (
    <div className=" w-full h-screen">
      {/* header */}
      <div className="flex justify-between align-items-center mt-10">
        <MapPin className="text-blue-700" size={20} />
        <p className="text-white text-lg">Postcode</p>
        <div
          style={{ height: "1px", width: "6%" }}
          className="my-auto bg-blue-700"
        />
        <Trash2 size={20} />
        <p className="text-white text-lg">Waste Type</p>
        <div
          style={{ height: "1px", width: "6%" }}
          className=" my-auto bg-blue-700"
        />
        <Truck size={20} />
        <p className="text-white text-lg">Select Skip</p>
        <div
          style={{ height: "1px", width: "6%" }}
          className=" my-auto bg-blue-700"
        />
        <Shield size={20} />
        <p className="text-white text-lg">Permit Check</p>
        <div
          style={{ height: "1px", width: "6%" }}
          className=" my-auto bg-blue-700"
        />
        <Calendar size={20} />
        <p className="text-white text-lg">Choose Date</p>
        <div
          style={{ height: "1px", width: "6%" }}
          className=" my-auto bg-blue-700"
        />
        <CreditCard size={20} />
        <p className="text-white text-lg">Payment</p>
      </div>
    </div>
  );
}

export default App;
