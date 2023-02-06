import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( categorias ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState([]);


    const getImages = async() => {

       const newImages = await getGifs(categorias);

        setImages(newImages);
        setisLoading(true)

    }

    useEffect( () => {

       getImages();
    }, [] )

  return {

    images,
    isLoading
  }
}
