import React, { createContext, useState } from 'react';
import { fetchNotes as fetchNotesAPI, updateNote, deleteNote, createNote as createNoteAPI } from '../utils/api';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await fetchNotesAPI();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const createNote = async (newNote) => {
    try {
      const createdNote = await createNoteAPI(newNote);
      setNotes([...notes, createdNote]);
    } catch (error) {
      console.error('Error creating note:', error);
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
    <NotesContext.Provider
      value={{
        notes,
        fetchNotes,
        createNote,
        handleView,
        handleUpdate,
        handleDelete,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};