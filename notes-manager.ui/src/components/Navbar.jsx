import React from 'react';

const Navbar = ({ onCreateNote }) => {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notes Manager</h1>
        <div className="space-x-4">
          <button
            onClick={onCreateNote}
            className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-100 transition"
          >
            Create Note
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;