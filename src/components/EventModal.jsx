import React, { useState } from "react";

const EventModal = ({ selectedDate, onSave, onClose, events = [], onDelete, onEdit }) => {
  const [title, setTitle] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const dateLabel = selectedDate.format("DD MMM YYYY");

  const handleSave = () => {
    if (!title.trim()) return;
    if (editingIndex !== null) {
      onEdit(editingIndex, title);
      setEditingIndex(null);
    } else {
      onSave({ title });
    }
    setTitle("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
      <div className="bg-white p-4 rounded shadow w-96 max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Events on {dateLabel}</h2>

        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              {editingIndex === index ? (
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border p-1 flex-1 mr-2"
                />
              ) : (
                <span className="flex-1">{event.title}</span>
              )}
              <div className="space-x-2">
                {editingIndex === index ? (
                  <button onClick={handleSave} className="text-green-600">Save</button>
                ) : (
                  <button onClick={() => {
                    setEditingIndex(index);
                    setTitle(event.title);
                  }} className="text-blue-600">Edit</button>
                )}
                <button onClick={() => onDelete(index)} className="text-red-500">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-600 mb-4">No events yet.</p>
        )}

        {editingIndex === null && (
          <>
            <input
              className="border p-2 w-full mt-4"
              placeholder="New event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-3">
              <button onClick={onClose} className="text-red-500">Close</button>
              <button onClick={handleSave} className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventModal;
