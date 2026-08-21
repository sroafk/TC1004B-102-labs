export const CharacterItem = ({ name, height, mass, hairColor }) => {
    return (
        <div className="character-item">
            <h2>{name}</h2>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
};