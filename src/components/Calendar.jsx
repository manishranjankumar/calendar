import React from "react";
import DayCell from "./DayCell";

const Calendar = ({ days, onDayClick }) => (
  <div className="grid grid-cols-7 gap-1">
    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
      <div key={d} className="font-bold text-center">{d}</div>
    ))}
    {days.map((day, index) => (
      <DayCell key={index} day={day} onClick={() => onDayClick(day)} />
    ))}
  </div>
);

export default Calendar;
