import { useCounter } from './hooks/useCounter';


export const FirstApp = ({value}) => {
  
  const { counter, Increment, Decrement, Reset } = useCounter(value);

  return (
    <>
      <h1> counter </h1>
      <samp> {counter} </samp>
      <button onClick={() => Increment()}> +1 </button>
      <button onClick={() => Decrement()}> -1 </button>
      <button onClick={() => Reset()}> Reset </button>
    </>
  );
};