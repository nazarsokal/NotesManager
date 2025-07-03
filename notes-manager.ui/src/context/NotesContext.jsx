import React, { createContext, useState } from 'react';
import { fetchNotes as fetchNotesAPI, updateNote, deleteNote, createNote as createNoteAPI, fetchNoteById as fetchNoteByIdAPI } from '../utils/api';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({ id: null, title: '', content: '', date: '' });

  const fetchNotes = async () => {
    try {
      console.log('Calling fetchNotes API...');
      const fetchedNotes = await fetchNotesAPI();
      console.log('fetchNotes API response:', fetchedNotes);
      const validNotes = fetchedNotes.filter(note => note.id != null);
      if (fetchedNotes.length !== validNotes.length) {
        console.warn('Filtered out invalid notes:', fetchedNotes.filter(note => note.id == null));
      }
      console.log('Setting notes state:', validNotes);
      setNotes(validNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const fetchNoteById = async (id) => {
    try {
      console.log('Calling fetchNoteById API for ID:', id);
      const note = await fetchNoteByIdAPI(id);
      console.log('fetchNoteById API response:', note);
      return note;
    } catch (error) {
      console.error('Error fetching note by ID:', error);
      throw error;
    }
  };

  const createNote = async (newNote) => {
    try {
      console.log('Calling createNote API with:', newNote);
      const createdNote = await createNoteAPI(newNote);
      console.log('createNote API response:', createdNote);
      if (!createdNote.id) {
        console.error('Created note has invalid ID:', createdNote);
        throw new Error('Invalid note ID from API');
      }
      setNotes([...notes, createdNote]);
      console.log('Updated notes state:', [...notes, createdNote]);
    } catch (error) {
      console.error('Error creating note:', error);
      throw error;
    }
  };

  const openUpdateModal = (id, title, content, date) => {
    setSelectedNote({ id, title, content, date });
    setUpdateModalOpen(true);
  };

  const handleUpdate = async (updatedNote) => {
    try {
      console.log('Calling updateNote API with:', updatedNote);
      const updated = await updateNote(updatedNote.id, updatedNote);
      console.log('updateNote API response:', updated);
      setNotes(notes.map(note => note.id === updatedNote.id ? updated : note));
      console.log('Updated notes state:', notes.map(note => note.id === updatedNote.id ? updated : note));
      setUpdateModalOpen(false);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log('Calling deleteNote API for ID:', id);
      await deleteNote(id);
      setNotes(notes.filter(note => note.id !== id));
      console.log('Updated notes state after delete:', notes.filter(note => note.id !== id));
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
        handleUpdate,
        handleDelete,
        isModalOpen,
        setIsModalOpen,
        updateModalOpen,
        setUpdateModalOpen, // Added to fix the error
        openUpdateModal,
        selectedNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};