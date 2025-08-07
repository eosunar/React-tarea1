import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
// **VERIFICA ESTA LÍNEA:** Asegúrate de que estás importando los componentes correctos.
import { SearchForm, Input, Button, AlbumList, AlbumListItem } from './styles';

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
      {/* **VERIFICA ESTA SECCIÓN:** Usa <SearchForm>, <Input>, y <Button> */}
      <SearchForm onSubmit={handleSearch}>
        <Input 
          type="text"
          placeholder="Busca tu artista favorito (ej: Queen)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </Button>
      </SearchForm>

      {/* El resto del código sigue igual... */}
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      
      {albums && (
        <div>
          {albums.length > 0 ? (
            <>
              <h2>Álbumes de {artistToSearch}</h2>
              <AlbumList>
                {albums.map((album) => (
                  <AlbumListItem key={album.idAlbum}>
                    <Link to={`/album/${album.idAlbum}`}>
                      {album.strAlbum} ({album.intYearReleased})
                    </Link>
                  </AlbumListItem>
                ))}
              </AlbumList>
            </>
          ) : (
            artistToSearch && !loading && <p>No se encontraron álbumes para "{artistToSearch}".</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;