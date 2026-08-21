import { useState } from 'react';

export const Browser =({ onNewSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length === 0) return;

        onNewSearch(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search for a character"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};