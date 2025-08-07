import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Inicia en false
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
        setData(null); // Limpia los datos si no hay URL
        return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        const json = await response.json();
        
        // La API devuelve `null` si no encuentra nada. Lo convertimos a un array vacío.
        const result = json.album || json.track;
        setData(result === null ? [] : result);

      } catch (e) {
        setError('Hubo un problema al cargar los datos. Intenta nuevamente.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, [url]);

  return { data, loading, error };
};