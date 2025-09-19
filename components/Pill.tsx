// components/Pill.tsx
import React from "react";

export interface PillProps {
  title: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ title, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border transition ${
        active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700"
      }`}
    >
      {title}
    </button>
  );
};

export default Pill;
