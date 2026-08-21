import { useState, useEffect } from 'react';
import { getCharacters } from '../helpers/getCharacters';

export const useFetchStarwars = (category) => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [mass, setMass] = useState('');
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        getCharacters(category)
            .then(characters => {
                const character = characters[0];
                if (!character) return;

                setName(character.name);
                setHeight(character.height);
                setMass(character.mass);
                setHairColor(character.hairColor);
            })
            .catch(() => {
                setName('');
                setHeight('');
                setMass('');
                setHairColor('');
            });
    }, [category]);

    return { name, height, mass, hairColor };
};