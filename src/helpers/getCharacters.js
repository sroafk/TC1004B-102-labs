export const getCharacters = async(search = '') => {
    const query = search ? `&search=${encodeURIComponent(search)}` : '';
    const url = `https://swapi.dev/api/people/?limit=10${query}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error('Unable to load characters');

    const { results } = await response.json();

    return results.map(character => ({
        name: character.name,
        height: character.height,
        mass: character.mass,
        hairColor: character.hair_color
    }));
};


