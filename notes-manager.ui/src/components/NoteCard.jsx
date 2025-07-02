import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const NoteCard = ({ note, onUpdate, onDelete }) => {
  const { fetchNoteById } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleView = async () => {
    if (!note.noteId) {
      console.error('Invalid note ID:', note);
      navigate('/note/invalid', { state: { error: 'Invalid note ID' } });
      return;
    }

    try {
      const detailedNote = await fetchNoteById(note.noteId);
      navigate(`/note/${note.noteId}`, { state: { note: detailedNote } });
    } catch (error) {
      console.error('Error fetching note:', error);
      navigate(`/note/${note.noteId}`, { state: { error: 'Failed to fetch note details' } });
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-green-700">{note.title || 'Untitled'}</h3>
      <p className="text-sm text-gray-500">{note.date || 'No date'}</p>
      <div className="mt-4 flex space-x-2">
        <button 
          onClick={handleView}
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
        >
          View
        </button>
        <button 
          onClick={() => onUpdate(note.noteId)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
          disabled={!note.noteId}
        >
          Update
        </button>
        <button 
          onClick={() => onDelete(note.noteId)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          disabled={!note.noteId}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;