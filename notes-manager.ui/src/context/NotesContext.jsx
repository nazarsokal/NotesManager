import React, { createContext, useState } from 'react';
import { fetchNotes as fetchNotesAPI, updateNote, deleteNote, createNote as createNoteAPI, fetchNoteById as fetchNoteByIdAPI } from '../utils/api';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await fetchNotesAPI();
      // Filter out notes with undefined or null IDs
      const validNotes = fetchedNotes.filter(note => note.noteId != null);
      if (fetchedNotes.length !== validNotes.length) {
        console.warn('Filtered out invalid notes:', fetchedNotes.filter(note => note.noteId == null));
      }
      setNotes(validNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const fetchNoteById = async (id) => {
    try {
      const note = await fetchNoteByIdAPI(id);
      return note;
    } catch (error) {
      console.error('Error fetching note by ID:', error);
      throw error;
    }
  };

  const createNote = async (newNote) => {
    try {
      const createdNote = await createNoteAPI(newNote);
      if (!createdNote.noteId) {
        console.error('Created note has invalid ID:', createdNote);
        throw new Error('Invalid note ID from API');
      }
      setNotes([...notes, createdNote]);
    } catch (error) {
      console.error('Error creating note:', error);
      throw error;
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
      setNotes(notes.filter(note => note.noteId !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        fetchNotes,
        fetchNoteById,
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