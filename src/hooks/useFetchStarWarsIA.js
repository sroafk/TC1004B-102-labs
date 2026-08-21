// src/hooks/useFetchStarWarsIA.js
import { useState, useEffect } from 'react';
import { getStarWarsDataIA } from '../helpers/getStarWarsDataIA';

export const useFetchStarWarsIA = (query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let isCurrentRequest = true;

        const getData = async () => {
            setIsLoading(true);
            setError('');

            try {
                const characters = await getStarWarsDataIA(query);
                if (isCurrentRequest) setData(characters);
            } catch {
                if (isCurrentRequest) {
                    setData([]);
                    setError('No se pudieron cargar los personajes. Intenta de nuevo.');
                }
            } finally {
                if (isCurrentRequest) setIsLoading(false);
            }
        };

        getData();

        return () => {
            isCurrentRequest = false;
        };
    }, [query]);

    return {
        data,
        isLoading,
        error
    };
}