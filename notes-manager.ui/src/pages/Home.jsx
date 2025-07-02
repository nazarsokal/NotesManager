import React, { useContext, useState } from 'react';
import { NotesContext } from '../context/NotesContext';
import NoteCard from '../components/NoteCard';
import CreateNoteModal from '../components/CreateNoteModal';

const Home = () => {
  const { notes, fetchNotes, handleView, handleUpdate, handleDelete, createNote, isModalOpen, setIsModalOpen } = useContext(NotesContext);
  const [isNotesVisible, setIsNotesVisible] = useState(false);

  const handleSeeAllNotes = async () => {
    await fetchNotes();
    setIsNotesVisible(true);
  };

  const handleCreateNote = async (newNote) => {
    await createNote(newNote);
    if (isNotesVisible) {
      await fetchNotes(); // Refresh notes if visible
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Your Notes</h2>
        {!isNotesVisible && (
          <button
            onClick={handleSeeAllNotes}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition mb-6"
          >
            See All Notes
          </button>
        )}
        {isNotesVisible && (
          <>
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
          </>
        )}
        <CreateNoteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateNote}
        />
      </div>
    </div>
  );
};

export default Home;