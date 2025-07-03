import React, { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import { useTranslation } from 'react-i18next';

const NoteModal = ({ isOpen, onClose, isUpdate = false }) => {
  const { createNote, handleUpdate, selectedNote } = useContext(NotesContext);
  const { t } = useTranslation();
  const [title, setTitle] = useState(isUpdate ? selectedNote.title : '');
  const [content, setContent] = useState(isUpdate ? selectedNote.content : '');
  const [date, setDate] = useState(isUpdate ? selectedNote.date : new Date().toISOString().split('T')[0]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = { title, content, date };
    if (isUpdate && selectedNote.id) {
      await handleUpdate({ ...newNote, id: selectedNote.id });
    } else {
      await createNote(newNote);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-green-700 mb-4">{isUpdate ? t('noteModal.updateTitle') : t('noteModal.createTitle')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">{t('noteModal.titleLabel')}</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">{t('noteModal.contentLabel')}</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md h-32"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">{t('noteModal.dateLabel')}</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              {t('noteModal.cancel')}
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              {isUpdate ? t('noteModal.update') : t('noteModal.create')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;