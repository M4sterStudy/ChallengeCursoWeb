import { GifItem } from './GifItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    const [images]= useFetchGifs(category);

   

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