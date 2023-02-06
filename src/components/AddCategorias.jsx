import { useState } from "react"

export const AddCategorias = ({onNewCategoria}) => {

  const [InputValue, setInputValue] = useState();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = ( event ) => {

    event.preventDefault();
    if( InputValue.trim().length <= 1 ) return;//solo se va acumplir si tenemos mas de un caracter
    // setCategorias(categorias => [InputValue, ...categorias] )
    setInputValue('');
    onNewCategoria( InputValue.trim() );

  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input 
        type="text"
        placeholder="Buscar Gifs"
        value={ InputValue }
        onChange={ onInputChange }
    />
    </form>
    
  )
}
