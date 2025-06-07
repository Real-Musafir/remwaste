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
        <div
          style={{ height: "3px", width: "6%" }}
          className="my-auto bg-blue-700"
        />
        <Trash2 size={20} />
        <div
          style={{ height: "3px", width: "6%" }}
          className=" my-auto bg-blue-700"
        />
        <Truck size={20} />
        <div
          style={{ height: "3px", width: "6%" }}
          className=" my-auto bg-blue-700"
        />
        <Shield size={20} />
        <div
          style={{ height: "3px", width: "6%" }}
          className=" my-auto bg-blue-700"
        />
        <Calendar size={20} />
        <div
          style={{ height: "3px", width: "6%" }}
          className=" my-auto bg-blue-700"
        />
        <CreditCard size={20} />
      </div>
    </div>
  );
}

export default App;
