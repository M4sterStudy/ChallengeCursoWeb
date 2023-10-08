import React, { useState } from 'react'

export const ComponentApp = () => {
  const [category,setCategory]=useState("")
const [categories,setCategories]=useState(["first category"])
const handleEvent=(e)=>{
setCategory(e.target.value)
}
const Addcategory=()=>{
  setCategories(list=>[...list,category])
  setCategory("")
}
  return (
    <>
    <h1>GifExpert</h1>
    <input type="..." value ={category}onChange={(event)=>handleEvent(event)} />
    <button onClick={()=> Addcategory()}>Add category</button>
    <ol>
        {
            categories.map(
                (category,key)=>{
                    return <li key ={key}> 
                    {category} </li>
                }
            )
        }
    </ol>


    </>
    
    
  )
}