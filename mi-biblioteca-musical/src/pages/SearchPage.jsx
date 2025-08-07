import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [artistToSearch, setArtistToSearch] = useState('');

  const searchUrl = artistToSearch 
    ? `https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artistToSearch}` 
    : null;

  const { data: albums, loading, error } = useFetch(searchUrl);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;
    setArtistToSearch(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text"
          placeholder="Busca tu artista favorito (ej: Oasis)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {/* Renderizado Condicional */}
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      
      {albums && (
        <div>
          {albums.length > 0 ? (
            <>
              <h2>Álbumes de {artistToSearch}</h2>
              <ul>
                {albums.map((album) => (
                  <li key={album.idAlbum}>
                    <Link to={`/album/${album.idAlbum}`}>
                      {album.strAlbum} ({album.intYearReleased})
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            // Mensaje cuando la búsqueda no devuelve resultados
            artistToSearch && !loading && <p>No se encontraron álbumes para "{artistToSearch}".</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;