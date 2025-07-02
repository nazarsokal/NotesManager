import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const NoteDetail = () => {
  const { notes } = useContext(NotesContext);
  const { id } = useParams();
  const note = notes.find(note => note.id === parseInt(id));

  if (!note) {
    return <div className="container mx-auto p-6 text-red-500">Note not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">{note.title}</h2>
      <p className="text-gray-600">{note.content}</p>
      <p className="text-sm text-gray-500 mt-2">{note.date}</p>
    </div>
  );
};

export default NoteDetail;