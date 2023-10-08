import React, { useState } from "react";

const FirstApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1); // Restar 1 al contador
  };

  const handleReset = () => {
    setCounter(value); // Restaurar el valor inicial
  };

  return (
    <>
      <h1>Counter</h1>
      <span>{counter}</span>
      <button onClick={() => handleAdd()}>+1</button>
      <button onClick={() => handleSubtract()}>-1</button> {/* Botón para restar 1 */}
      <button onClick={() => handleReset()}>Reset</button> {/* Botón para restablecer el valor */}
    </>
  );
};

export default FirstApp;
