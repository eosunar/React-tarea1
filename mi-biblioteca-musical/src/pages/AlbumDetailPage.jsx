import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const AlbumDetailPage = () => {
  const { albumId } = useParams();

  // Endpoint para obtener los tracks de un álbum
  const tracksUrl = `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${albumId}`;
  
  const { data: tracks, loading, error } = useFetch(tracksUrl);

  return (
    <div>
      <Link to="/">&larr; Volver a la búsqueda</Link>
      
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      
      {tracks && tracks.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <h2>{tracks[0].strAlbum}</h2>
          <h3>Artista: {tracks[0].strArtist}</h3>
          
          <h4>Canciones:</h4>
          <ol>
            {tracks.map(song => (
              <li key={song.idTrack}>
                {song.strTrack}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default AlbumDetailPage;