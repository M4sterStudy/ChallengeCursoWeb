import React, { useState } from 'react'

export const AddCategory = ({Agregar}) => {
    const [inputValue,setinputValue]=useState("...")
    const handleEvent=(e)=>{
        setinputValue(e.target.value)
        }

        const onSubmit=(evt)=>{
            evt.preventDefault();
            Agregar(inputValue);
            setinputValue("")
        }
  return (
    <form onSubmit={(event)=>onSubmit(event)} >
        <input
        type="text"
        placeholder="buscar"
        value={inputValue}
        onChange={(event)=> handleEvent(event)}
        
        />
        

        

    </form>
  )
}