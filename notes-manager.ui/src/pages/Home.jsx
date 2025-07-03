import React, { useContext, useState } from 'react';
import { NotesContext } from '../context/NotesContext';
import NoteCard from '../components/NoteCard';
import NoteModal from '../components/NoteModal';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { notes, fetchNotes, handleView, handleUpdate, handleDelete, createNote, isModalOpen, setIsModalOpen, updateModalOpen, setUpdateModalOpen } = useContext(NotesContext);
  const [isNotesVisible, setIsNotesVisible] = useState(false);
  const { t } = useTranslation();

  const handleSeeAllNotes = async () => {
    console.log('Fetching notes...');
    await fetchNotes();
    console.log('Notes fetched, setting isNotesVisible to true. Notes:', notes);
    setIsNotesVisible(true);
  };

  const handleCreateNote = async (newNote) => {
    await createNote(newNote);
    if (isNotesVisible) {
      console.log('Refreshing notes after creation. Notes:', notes);
      await fetchNotes(); // Refresh notes if visible
    }
  };

  console.log('Rendering Home, isNotesVisible:', isNotesVisible, 'Notes:', notes);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6">{t('home.title')}</h2>
        {!isNotesVisible && (
          <button
            onClick={handleSeeAllNotes}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition mb-6"
          >
            {t('home.seeAllNotes')}
          </button>
        )}
        {isNotesVisible && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.length > 0 ? (
                notes.map(note => (
                  <NoteCard 
                    key={note.id} 
                    note={note} 
                    onView={handleView} 
                    onUpdate={handleUpdate} 
                    onDelete={handleDelete} 
                  />
                ))
              ) : (
                <p className="text-gray-500 text-center mt-6">{t('home.noNotes')}</p>
              )}
            </div>
          </>
        )}
        <NoteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateNote}
        />
        <NoteModal
          isOpen={updateModalOpen}
          onClose={() => setUpdateModalOpen(false)}
          isUpdate={true}
        />
      </div>
    </div>
  );
};

export default Home;