import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem';
import { getGifs } from './helper/getGifs';

export const GifGrid = ({category}) => {
    const [images,setimages]= useState([]);

    const getImages=async()=>{
        const images=await getGifs(category)
        setimages(images)
    }
    useEffect( () =>{
        getImages();

    },[])

  return (
    <>
    <h1>{category}</h1>
    <div className="card-grid">
        {
            images.map((image,key)=>{
                return <GifItem key={key} {...image}></GifItem>
            })
        }
    </div>
    </>
  )
}