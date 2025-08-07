import { ADD_SONG, REMOVE_SONG } from '../actions/libraryActions';

// El estado inicial de nuestra biblioteca es una lista vacía.
const initialState = [];

export const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      // Verificamos si la canción ya está en la biblioteca para no duplicarla.
      if (state.find(song => song.idTrack === action.payload.idTrack)) {
        return state; // Si ya existe, no hacemos nada y devolvemos el estado actual.
      }
      // Devolvemos un NUEVO array con el estado anterior más la nueva canción.
      return [...state, action.payload];
    
    case REMOVE_SONG:
      // Devolvemos un NUEVO array filtrando la canción que coincida con el ID.
      return state.filter(song => song.idTrack !== action.payload);

    default:
      return state;
  }
};