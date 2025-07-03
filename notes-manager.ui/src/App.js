import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotesContext, NotesProvider } from './context/NotesContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NoteDetail from './pages/NoteDetail';
// import NotFound from './pages/NotFound';

const App = () => {
  const { setIsModalOpen } = useContext(NotesContext);

  return (
    <Router>
      <Navbar onCreateNote={() => setIsModalOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note/:id" element={<NoteDetail />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

const Root = () => (
  <NotesProvider>
    <App />
  </NotesProvider>
);

export default Root;