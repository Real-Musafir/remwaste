import React from "react";
import {
  MapPin,
  Trash2,
  Truck,
  Shield,
  Calendar,
  CreditCard,
} from "lucide-react";

const steps = [
  { icon: MapPin, label: "Postcode" },
  { icon: Trash2, label: "Waste Type" },
  { icon: Truck, label: "Select Skip" },
  { icon: Shield, label: "Permit Check" },
  { icon: Calendar, label: "Choose Date" },
  { icon: CreditCard, label: "Payment" },
];

function ItemHeader({ currentStep }) {
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex items-center mt-10 justify-center whitespace-nowrap">
        {steps.map((step, index) => {
          const isActive = index <= currentStep;
          const isActiveBar = index <= currentStep - 2;

          return (
            <React.Fragment key={index}>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <step.icon
                  className={isActive ? "text-blue-700" : "text-gray-500"}
                  size={20}
                />
                <p
                  className={`text-lg ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </p>
              </div>
              {index !== steps.length - 1 && (
                <div
                  style={{ height: "1px", width: "6%" }}
                  className={`my-auto mx-2 flex-shrink-0 ${
                    isActiveBar ? "bg-blue-700" : "bg-gray-500"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ItemHeader;
