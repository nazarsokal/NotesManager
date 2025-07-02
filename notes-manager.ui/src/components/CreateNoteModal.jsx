import React, { useState } from 'react';
import Button from './Button';

const CreateNoteModal = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onCreate({ title, content, date: new Date().toISOString().split('T')[0] });
      setTitle('');
      setContent('');
      onClose();
    } else {
      alert('Please fill in both title and content.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Create New Note</h2>
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter note title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              placeholder="Enter note content"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <Button color="white" onClick={onClose}>Cancel</Button>
            <Button color="green" onClick={handleSubmit}>Create</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNoteModal;