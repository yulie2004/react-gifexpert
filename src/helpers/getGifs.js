export const getGifs = async( categorias ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=AjeXanNIDi9Dg9wLF5DoRBXxaba6D7Lo&q=${categorias}&limit=5`;

    const respuesta = await fetch (url);

    const { data } = await respuesta.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}