import {CharacterItem} from './characterItem.jsx';
import {useFetchStarwars} from '../hooks/useFetchStarwars';

export const CharacterGrid = ({ category }) => {
    const { name, height, mass, hairColor } = useFetchStarwars(category);

    return (
        <div className="character-grid">
            <CharacterItem
                name={name}
                height={height}
                mass={mass}
                hairColor={hairColor}
            />
        </div>
    );
}