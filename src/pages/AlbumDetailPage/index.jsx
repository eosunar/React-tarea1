import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import { DetailContainer, BackLink, TrackList, TrackListItem } from './styles';

// 1. Importaciones de Redux
import { useDispatch } from 'react-redux';
import { addSong } from '../../redux/actions/libraryActions';
import { Button } from '../SearchPage/styles'; // Reutilizamos el botón

const AlbumDetailPage = () => {
  const { albumId } = useParams();
  const tracksUrl = `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${albumId}`;
  const { data: tracks, loading, error } = useFetch(tracksUrl);
  
  // 2. Obtenemos la función dispatch
  const dispatch = useDispatch();

  // 3. Función para manejar el clic del botón
  const handleAddSong = (song) => {
    dispatch(addSong(song)); // Despachamos la acción con la canción completa
    alert(`"${song.strTrack}" fue agregada a tu biblioteca.`);
  };

  return (
    <div>
      <BackLink to="/">&larr; Volver a la búsqueda</BackLink>
      
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      
      {tracks && tracks.length > 0 && (
        <DetailContainer>
          <h2>{tracks[0].strAlbum}</h2>
          <h3>Artista: {tracks[0].strArtist}</h3>
          <h4>Canciones:</h4>
          <TrackList>
            {tracks.map(song => (
              <TrackListItem key={song.idTrack}>
                {song.strTrack}
                {/* 4. Agregamos el botón para cada canción */}
                <Button 
                  onClick={() => handleAddSong(song)}
                  style={{ marginLeft: 'auto', padding: '5px 10px' }}
                >
                  Agregar
                </Button>
              </TrackListItem>
            ))}
          </TrackList>
        </DetailContainer>
      )}
      {/* ...resto del código... */}
    </div>
  );
};

export default AlbumDetailPage;