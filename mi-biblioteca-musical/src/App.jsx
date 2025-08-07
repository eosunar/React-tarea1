import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import SearchPage from './pages/SearchPage';
import AlbumDetailPage from './pages/AlbumDetailPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Mi Biblioteca Musical Dinámica 🎵</h1>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/album/:albumId" element={<AlbumDetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;