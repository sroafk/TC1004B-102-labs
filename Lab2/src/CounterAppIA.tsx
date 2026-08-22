import { useState } from 'react';
import PropTypes from 'prop-types';

// 1. Definimos la interfaz para las propiedades en TypeScript
interface CounterAppIAProps {
  value: number;
}

// 2. Le indicamos al componente que sus props tienen la forma de la interfaz
export const CounterAppIA = ({ value }: CounterAppIAProps) => {
  // TypeScript infiere automáticamente que 'counter' es un número, 
  // pero podemos indicarlo explícitamente con <number>
  const [counter, setCounter] = useState<number>(value);

  const handleAdd = (): void => {
    setCounter(counter + 1);
  };

  const handleSubtract = (): void => {
    setCounter(counter - 1);
  };

  const handleReset = (): void => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { value } </h2>
      <h3> { counter } </h3>

      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSubtract }>-1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  );
};

// 3. Mantenemos la validación de PropTypes requerida en las instrucciones
CounterAppIA.propTypes = {
  value: PropTypes.number.isRequired
};