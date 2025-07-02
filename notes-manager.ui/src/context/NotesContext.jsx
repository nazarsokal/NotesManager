import React, { createContext, useState } from 'react';
import { fetchNotes as fetchNotesAPI, updateNote, deleteNote } from '../utils/api';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await fetchNotesAPI();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleView = (id) => {
    // Navigation handled by react-router-dom in NoteCard
  };

  const handleUpdate = (id) => {
    alert(`Update note with ID: ${id}`);
    // Add update logic (e.g., call updateNote API)
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter(note => note.id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <NotesContext.Provider value={{ notes, fetchNotes, handleView, handleUpdate, handleDelete }}>
      {children}
    </NotesContext.Provider>
  );
};