import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import AlbumDetailPage from './pages/AlbumDetailPage';

function App() {
  return (
    <div>
      <h1>Mi Biblioteca Musical Dinámica 🎵</h1>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        {/* Usamos :albumId para crear una ruta dinámica */}
        <Route path="/album/:albumId" element={<AlbumDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;