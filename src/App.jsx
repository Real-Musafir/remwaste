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
      <div className="flex">
        <MapPin size={20} />
        <Trash2 size={20} />
        <Truck size={20} />
        <Shield size={20} />
        <Calendar size={20} />
        <CreditCard size={20} />
      </div>
    </div>
  );
}

export default App;
