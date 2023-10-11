import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHook = () => {
    const { counter, increment } = useCounter(1);
    const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
    const { data, isLoading, hasError } = useFetch(url);

    return (
        <>
            <h1>MultipleCustomHook</h1>
            <hr />
            {
                isLoading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className='blockquote text-end'>
                        <p className="mb-1">{data.name}</p>
                    </blockquote>
                )
            }
            <button className="btn btn-primary" onClick={increment}>Siguiente Pokemon</button>
        </>
    );
};
