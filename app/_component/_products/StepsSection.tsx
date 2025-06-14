// app/_component/_products/StepsSection.tsx

import React from "react";
import { ThumbsUp, ClipboardList, UserPlus } from "lucide-react";

const steps = [
  {
    title: "1. Choose your plan",
    icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "2. Create account",
    icon: <UserPlus className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "3. Enjoy easy banking",
    icon: <ThumbsUp className="w-8 h-8 text-blue-600" />,
  },
];

const StepsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-10">
          Just 3 steps to your new bank account
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md"
            >
              <div className="mb-4">{step.icon}</div>
              <p className="text-gray-700 font-medium">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
