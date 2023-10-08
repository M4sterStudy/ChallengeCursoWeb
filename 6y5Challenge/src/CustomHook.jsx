import React from 'react'
import { useCounter } from './hooks/useCounter'
import { useFetch } from './useFetch'

export const CustomHook = () => {
   
    const{counter,Increment}=useCounter(1)
    const{data,isLoading,hasError}=useFetch(`https://api.giphy.com/v1/gifs/search?api_key=Ns4NdhIX21HEqu9xdgsozNuiNyuy937q&q=${counter}`)
  return (
    <>
    <h1>CustomHook</h1>
    <hr/>
    {
        isLoading?(
            <div className="aler alert-info text-center">
                Loading...
            </div>
        ):(
          <blockquote className='blockquuote text-end'>
            <p className="mb-1">7+{data[0]?.quote}</p>
            <footer className='blockquote-footer'>
              {data[0]?.author}
            </footer>

          </blockquote>
        )
        
    }
    <button className="btn btn-primary" onClick={()=>Increment()}>Next Quote</button>

    </>
    
  )
}