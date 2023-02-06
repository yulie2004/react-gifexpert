import { useState } from "react"
import { AddCategorias, GifGrid } from "./components";


export const GifExpertApp = () => {

   const [categorias, setCategorias] = useState([ 'princesas']);

   const onAddCategoria = (newCategoria) => {

    if(categorias.includes (newCategoria) ) return;
     setCategorias([newCategoria, ...categorias])
   } 


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategorias 
          onNewCategoria = { onAddCategoria }
        />

        { 
        categorias.map(( categorias )=> (
          <GifGrid  
            key={ categorias } 
            categorias={ categorias }/>
            
          ) )

        }
        
    </>
  )
}

