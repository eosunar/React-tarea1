import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
// Importamos los nuevos componentes estilizados
import { DetailContainer, BackLink, TrackList, TrackListItem } from './styles';

const AlbumDetailPage = () => {
  const { albumId } = useParams();
  const tracksUrl = `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${albumId}`;
  const { data: tracks, loading, error } = useFetch(tracksUrl);

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
              </TrackListItem>
            ))}
          </TrackList>
        </DetailContainer>
      )}

      {tracks && tracks.length === 0 && !loading && (
        <p>Este álbum no tiene una lista de canciones disponible en la base de datos.</p>
      )}
    </div>
  );
};

export default AlbumDetailPage;