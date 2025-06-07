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

function ItemHeader({ currentStep = 2 }) {
  return (
    <div className="flex justify-between items-center mt-10">
      {steps.map((step, index) => {
        const isActive = index <= currentStep;
        const isActiveBar = index <= currentStep - 2;

        return (
          <React.Fragment key={index}>
            <step.icon
              className={isActive ? "text-blue-700" : "text-gray-500"}
              size={20}
            />
            <p
              className={`text-lg ${
                isActive ? "text-white" : "text-gray-400"
              } hidden sm:block`}
            >
              {step.label}
            </p>
            {index !== steps.length - 1 && (
              <div
                style={{ height: "1px", width: "6%" }}
                className={
                  isActiveBar ? "my-auto bg-blue-700" : "my-auto bg-gray-500"
                }
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default ItemHeader;
