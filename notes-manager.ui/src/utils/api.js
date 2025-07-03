// Replace with your actual backend API base URL
const BASE_URL = 'http://localhost:5252/api';

// Optional: Replace with your authentication token or remove if not needed
const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  // 'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
});

export const fetchNotes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch notes: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Fetched notes:', data); // Debug response
    return data; // Expected: [{ id, title, content, date }, ...]
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const fetchNoteById = async (id) => {
  if (!id) {
    throw new Error('Note ID is undefined or invalid');
  }
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch note: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Fetched note:', data); // Debug response
    return data; // Expected: { id, title, content, date }
  } catch (error) {
    console.error('Error fetching note:', error);
    throw error;
  }
};

export const createNote = async (newNote) => {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(newNote), // { title, content, date }
    });
    if (!response.ok) {
      throw new Error(`Failed to create note: ${response.statusText}`);
    }
    const createdNote = await response.json();
    console.log('Created note:', createdNote); // Debug response
    return createdNote; // Expected: { id, title, content, date }
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
};

export const updateNote = async (id, updatedNote) => {
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(updatedNote), // { title, content, date }
    });
    if (!response.ok) {
      throw new Error(`Failed to update note: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Updated note:', data); // Debug response
    return data; // Expected: { id, title, content, date }
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (!response.ok) {
      throw new Error(`Failed to delete note: ${response.statusText}`);
    }
    console.log('Deleted note:', id); // Debug response
    return true; // Indicate success
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};