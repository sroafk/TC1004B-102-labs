// src/helpers/getStarWarsDataIA.js
export const getStarWarsDataIA = async (query = '') => {
    const encodedQuery = encodeURIComponent(query.trim());
    const url = `https://swapi.dev/api/people/?limit=10&search=${encodedQuery}`;
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('No se pudieron cargar los personajes');
    }

    const data = await response.json();

    return data.results.map(person => ({
        id: person.url.split('/').filter(Boolean).pop(),
        name: person.name,
        height: person.height,
        mass: person.mass,
        gender: person.gender
    }));
}