import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import NoteCard from '../components/NoteCard';

const Home = () => {
  const { notes, handleView, handleUpdate, handleDelete } = useContext(NotesContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Your Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map(note => (
            <NoteCard 
              key={note.id} 
              note={note} 
              onView={handleView} 
              onUpdate={handleUpdate} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
        {notes.length === 0 && (
          <p className="text-gray-500 text-center mt-6">No notes available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;