export const fetchNotes = async () => {
  // Simulate API call with sample data
  return [
    { id: 1, title: 'Meeting Notes', content: 'Discuss project timeline and deliverables', date: '2025-07-01' },
    { id: 2, title: 'Grocery List', content: 'Milk, eggs, bread, vegetables', date: '2025-07-02' },
  ];
};

export const createNote = async (newNote) => {
  // Simulate API call to create a note
  const createdNote = {
    id: Math.floor(Math.random() * 10000) + 3, // Generate unique ID for mock
    ...newNote,
  };
  console.log(`Creating note:`, createdNote);
  return createdNote;
};

export const updateNote = async (id, updatedNote) => {
  console.log(`Updating note ${id} with`, updatedNote);
  // Implement actual API call
};

export const deleteNote = async (id) => {
  console.log(`Deleting note ${id}`);
  // Implement actual API call
};