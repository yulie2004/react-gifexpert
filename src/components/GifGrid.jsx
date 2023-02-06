import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ categorias }) => {

    const {images, isLoading} = useFetchGifs(categorias);


    return (
        <>
            <h3>{ categorias }</h3>

            {/* {
                isLoading && ( <h2>Cargando..</h2> )
                
            } */}

            <div className='card-grid'>
                {
                   images.map(( image )  => (
                        <GifItem 
                            key={image.id}
                            { ...image}
                        
                        />
                   ))
                }
                
                
            </div>
        </>  
    )
}
