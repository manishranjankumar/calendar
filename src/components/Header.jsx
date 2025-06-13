import React from "react";

const Header = ({ monthYear, onPrev, onNext }) => (
  <div className="flex justify-between items-center py-4">
    <button onClick={onPrev} className="px-3 py-1 bg-gray-200 rounded">Prev</button>
    <h2 className="text-xl font-bold">{monthYear}</h2>
    <button onClick={onNext} className="px-3 py-1 bg-gray-200 rounded">Next</button>
  </div>
);

export default Header;
