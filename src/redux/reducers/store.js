import { createStore } from 'redux';
import { libraryReducer } from './libraryReducer';

// Creamos el store pasándole nuestro reducer.
// El reducer es el único que puede modificar el estado del store.
const store = createStore(libraryReducer);

export default store;