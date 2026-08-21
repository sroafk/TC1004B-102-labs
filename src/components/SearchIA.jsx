// src/components/SearchIA.jsx
import { useState } from 'react';

export const SearchIA = ({ onNewSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length === 0) return;
        
        onNewSearch(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Busca un personaje (ej. Luke)"
                value={inputValue}
                onChange={onInputChange}
                style={{ padding: '10px 12px', fontSize: '16px', width: 'min(300px, 65vw)' }}
            />
            <button type="submit" style={{ padding: '10px 14px', marginLeft: '5px', cursor: 'pointer' }}>
                Buscar
            </button>
        </form>
    );
}