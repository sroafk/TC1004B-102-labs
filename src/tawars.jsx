import {useState} from 'react';
import { Browser } from './components/browser';
import { useFetchStarwars } from './hooks/useFetchStarwars';
import { CharacterItem } from './components/characterItem';

export const Tawars = () => {
    const [search, setSearch] = useState('');

    const onNewSearch = (newSearch) => {
        setSearch(newSearch);
    }

    const { name, height, mass, hairColor } = useFetchStarwars(search);

    return (
        <>
            <h1>Star Wars Characters</h1>
            <Browser onNewSearch={onNewSearch} />
            {name && <CharacterItem name={name} height={height} mass={mass} hairColor={hairColor} />}
        </>
    );
};