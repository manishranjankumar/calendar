import React from "react";
import dayjs from "dayjs";

const DayCell = ({ day, onClick }) => {
  const today = dayjs().format("YYYY-MM-DD");
  const isToday = day.format("YYYY-MM-DD") === today;

  return (
    <div
      onClick={onClick}
      className={`p-2 border h-24 overflow-auto cursor-pointer ${
        isToday ? "bg-blue-100 border-blue-500" : ""
      }`}
    >
      <div className="text-xs">{day.date()}</div>
    </div>
  );
};

export default DayCell;
