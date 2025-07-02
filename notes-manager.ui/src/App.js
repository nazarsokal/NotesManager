import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotesProvider } from './context/NotesContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NoteDetail from './pages/NoteDetail';
// import NotFound from './pages/NotFound';

const App = () => {
  return (
    <NotesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note/:id" element={<NoteDetail />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </NotesProvider>
  );
};

export default App;