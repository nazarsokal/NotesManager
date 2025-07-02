import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '../components/Button';

const NoteDetail = () => {
  const { state } = useLocation();
  const note = state?.note;
  const error = state?.error;

  if (error) {
    return (
      <div className="container mx-auto p-6 text-red-500">
        <p>{error}</p>
        <Link to="/" className="block mt-4">
          <Button color="green">Back to Home</Button>
        </Link>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="container mx-auto p-6 text-gray-500">
        <p>Loading note details...</p>
        <Link to="/" className="block mt-4">
          <Button color="green">Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">{note.title}</h2>
      <p className="text-gray-600">{note.content}</p>
      <p className="text-sm text-gray-500 mt-2">{note.dateCreated}</p>
      <Link to="/" className="mt-4 inline-block">
        <Button color="green">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NoteDetail;