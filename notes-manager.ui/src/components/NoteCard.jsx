import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const NoteCard = ({ note, onUpdate, onDelete }) => {
  const { fetchNoteById, openUpdateModal } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleView = async () => {
    if (!note.id) {
      console.error('Invalid note ID:', note);
      navigate('/note/invalid', { state: { error: 'Invalid note ID' } });
      return;
    }

    try {
      const detailedNote = await fetchNoteById(note.id);
      navigate(`/note/${note.id}`, { state: { note: detailedNote } });
    } catch (error) {
      console.error('Error fetching note:', error);
      navigate(`/note/${note.id}`, { state: { error: 'Failed to fetch note details' } });
    }
  };

  const handleUpdateClick = () => {
    if (!note.id) {
      console.error('Invalid note ID for update:', note);
      return;
    }
    openUpdateModal(note.id, note.title, note.content, note.date);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-green-700">{note.title || 'Untitled'}</h3>
      <p className="text-sm text-gray-500">{note.dateCreated || 'No date'}</p>
      <div className="mt-4 flex space-x-2">
        <button 
          onClick={handleView}
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
        >
          View
        </button>
        <button 
          onClick={handleUpdateClick}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
          disabled={!note.id}
        >
          Update
        </button>
        <button 
          onClick={() => onDelete(note.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          disabled={!note.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;