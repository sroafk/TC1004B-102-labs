// src/AppIA.jsx
import { useState } from 'react';
import { useFetchStarWarsIA } from './hooks/useFetchStarWarsIA';
import { SearchIA } from './components/SearchIA';
import { CardIA } from './components/CardIA';

export const AppIA = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // Desestructuramos lo que nos devuelve nuestro custom hook
    const { data, isLoading, error } = useFetchStarWarsIA(searchQuery);

    const onAddSearch = (newSearch) => {
        setSearchQuery(newSearch);
    };

    return (
        <main style={{ width: 'min(100% - 32px, 1000px)', margin: '0 auto', padding: '32px 16px', boxSizing: 'border-box', fontFamily: 'sans-serif' }}>
            <h1>Directorio Star Wars IA</h1>
            
            <SearchIA onNewSearch={onAddSearch} />

            {/* Renderizado condicional si está cargando */}
            {isLoading && <p>Cargando datos desde una galaxia muy lejana...</p>}
            {error && <p role="alert" style={{ color: '#b42318' }}>{error}</p>}
            {!isLoading && !error && data.length === 0 && <p>No encontramos personajes con esa búsqueda.</p>}

            {/* Contenedor de las tarjetas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '4px 20px', marginTop: '20px' }}>
                {data.map(character => (
                    <CardIA 
                        key={character.id} 
                        {...character} 
                    />
                ))}
            </div>
        </main>
    );
}