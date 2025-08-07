// src/App.jsx

// Importaciones completas
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

// Importaciones de páginas
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage';
import AlbumDetailPage from './pages/AlbumDetailPage';

// Estilos para el nav
import styled from 'styled-components';

// Un simple nav para navegar entre páginas
const Nav = styled.nav`
  margin-bottom: 2rem;
  a {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Mi Biblioteca Musical Dinámica 🎵</h1>
      
      <Nav>
        <Link to="/">Buscar</Link>
        <Link to="/library">Mi Biblioteca</Link>
      </Nav>

      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/album/:albumId" element={<AlbumDetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
