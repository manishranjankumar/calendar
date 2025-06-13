import { useState } from "react";
import dayjs from "dayjs";

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const daysInMonth = () => {
    const start = currentMonth.startOf("month").startOf("week");
    const end = currentMonth.endOf("month").endOf("week");
    const days = [];
    let date = start;

    while (date.isBefore(end) || date.isSame(end, "day")) {
      days.push(date);
      date = date.add(1, "day");
    }

    return days;
  };

  return {
    currentMonth,
    days: daysInMonth(),
    monthLabel: currentMonth.format("MMMM YYYY"),
    goToNextMonth: () => setCurrentMonth(currentMonth.add(1, "month")),
    goToPrevMonth: () => setCurrentMonth(currentMonth.subtract(1, "month")),
  };
};
