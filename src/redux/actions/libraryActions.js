// Exportamos los tipos de acción para evitar errores de tipeo en otros archivos.
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

// Creador de acción para agregar una canción
export const addSong = (song) => ({
  type: ADD_SONG,
  payload: song, // El 'payload' son los datos que la acción necesita.
});

// Creador de acción para eliminar una canción
export const removeSong = (songId) => ({
  type: REMOVE_SONG,
  payload: songId,
});