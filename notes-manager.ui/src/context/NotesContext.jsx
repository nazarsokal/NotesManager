import React, { createContext, useState } from 'react';

export const NotesContext = createContext();

const sampleNotes = [
  { id: 1, title: 'Meeting Notes', content: 'Discuss project timeline and deliverables', date: '2025-07-01' },
  { id: 2, title: 'Grocery List', content: 'Milk, eggs, bread, vegetables', date: '2025-07-02' },
];

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(sampleNotes);

  const handleView = (id) => {
    window.location.href = `/note/${id}`; // Use react-router-dom in practice
  };

  const handleUpdate = (id) => {
    alert(`Update note with ID: ${id}`);
    // Implement update logic
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, handleView, handleUpdate, handleDelete }}>
      {children}
    </NotesContext.Provider>
  );
};