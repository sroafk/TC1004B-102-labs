import PropTypes from 'prop-types';
import { useState } from 'react';

type CounterAppProps = {
    value: number;
};

const CounterApp = ({ value }: CounterAppProps) => {
    const [counter, setCounter] = useState(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <h3>{counter}</h3>

            <button onClick={() => setCounter(current => current + 1)}>Agregar</button>
            <button onClick={() => setCounter(current => current - 1)}>Disminuir</button>
            <button onClick={() => setCounter(value)}>Reset</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterApp;