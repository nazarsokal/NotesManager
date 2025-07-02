// Replace with your actual backend API base URL
const BASE_URL = 'http://localhost:5252/api';

const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
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
    return data; // Expected: [{ id, title, content, date }, ...]
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const createNote = async (newNote) => {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(newNote), 
    });
    if (!response.ok) {
      throw new Error(`Failed to create note: ${response.statusText}`);
    }
    const createdNote = await response.json();
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
      body: JSON.stringify(updatedNote), 
    });
    if (!response.ok) {
      throw new Error(`Failed to update note: ${response.statusText}`);
    }
    const data = await response.json();
    return data; 
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
    return true; 
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};