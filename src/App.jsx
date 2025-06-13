import React, { useState } from "react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import EventModal from "./components/EventModal";
import { useCalendar } from "./hooks/useCalendar";

const App = () => {
  const { currentMonth, days, monthLabel, goToNextMonth, goToPrevMonth } = useCalendar();
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});

  const handleDayClick = (day) => {
    setSelectedDate(day);
    setShowModal(true);
  };

  const handleSave = (event) => {
    const key = selectedDate.format("YYYY-MM-DD");
    const newEvents = { ...events };
    if (!newEvents[key]) newEvents[key] = [];
    newEvents[key].push(event);
    setEvents(newEvents);

  };
  const handleDelete = (eventIndex) => {
  const key = selectedDate.format("YYYY-MM-DD");
  const newEvents = [...(events[key] || [])];
  newEvents.splice(eventIndex, 1);
  setEvents({ ...events, [key]: newEvents });
};

const handleEdit = (eventIndex, newTitle) => {
  const key = selectedDate.format("YYYY-MM-DD");
  const updatedEvents = [...(events[key] || [])];
  updatedEvents[eventIndex].title = newTitle;
  setEvents({ ...events, [key]: updatedEvents });
};


  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Header monthYear={monthLabel} onPrev={goToPrevMonth} onNext={goToNextMonth} />
      <Calendar days={days} onDayClick={handleDayClick} />
      {showModal && (
     <EventModal
    selectedDate={selectedDate}
    events={events[selectedDate.format("YYYY-MM-DD")] || []}
    onSave={handleSave}
    onDelete={handleDelete}
    onEdit={handleEdit}
    onClose={() => setShowModal(false)}
  />
)}

    </div>
  );
};

export default App;
