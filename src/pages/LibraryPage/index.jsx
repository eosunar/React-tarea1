import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/actions/libraryActions';
import { AlbumList, AlbumListItem } from '../styles/SearchPage/styles';
import { Button } from '../styles/SearchPage/styles';

const LibraryPage = () => {
  // 1. Leemos el estado de la biblioteca desde el store de Redux
  const librarySongs = useSelector(state => state);
  const dispatch = useDispatch();

  const handleRemoveSong = (songId) => {
    dispatch(removeSong(songId));
  };

  return (
    <div>
      <h2>Mi Biblioteca de Canciones</h2>
      {librarySongs.length === 0 ? (
        <p>Aún no has agregado canciones. ¡Busca un artista y empieza a armar tu biblioteca!</p>
      ) : (
        <AlbumList>
          {librarySongs.map(song => (
            <AlbumListItem key={song.idTrack} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <strong>{song.strTrack}</strong>
                <br />
                <small>{song.strArtist} - {song.strAlbum}</small>
              </div>
              <Button 
                onClick={() => handleRemoveSong(song.idTrack)}
                style={{ backgroundColor: '#cf6679' }}
              >
                Eliminar
              </Button>
            </AlbumListItem>
          ))}
        </AlbumList>
      )}
    </div>
  );
};

export default LibraryPage;