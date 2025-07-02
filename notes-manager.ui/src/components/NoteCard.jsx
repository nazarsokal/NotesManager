import React from 'react';

const NoteCard = ({ note, onView, onUpdate, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-green-700">{note.title}</h3>
      <p className="text-sm text-gray-500">{note.date}</p>
      <div className="mt-4 flex space-x-2">
        <button 
          onClick={() => onView(note.id)}
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
        >
          View
        </button>
        <button 
          onClick={() => onUpdate(note.id)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
        >
          Update
        </button>
        <button 
          onClick={() => onDelete(note.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;