import React, { useState } from 'react'
import { GifGrid } from './GifGrid'
import { AddCategory } from './AddCategory'



export const GifExpert = () => {
  
const [categories,setCategories]=useState(["5"])

const Addcategory=(category)=>{
  
  setCategories(list=>[...list,category])
  
  
}
  return (
    <>
    <h1>GifExpert</h1>
    <AddCategory Agregar={Addcategory}/>
    
    
        {
            categories.map(
                (category,key)=>{
                    return <GifGrid category={category} key={key}/>
                    
                }
            )
        }
    


    </>
    
    
  )
}