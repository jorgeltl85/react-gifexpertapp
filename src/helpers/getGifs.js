export const getGifs = async( category ) => {

    const API_KEY = 'CAa16dQFCTdvbU0mAdMnxfiS1FbC3pnm';
    const dominio = 'https://';
    const limit = 10
    const url = `${dominio}api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=${limit}&api_key=${API_KEY}`;
        
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map ( img => {
        return {
            id: img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    })

    //console.log("--> El objeto mutado es",gifs)
    //setImages(gifs)
    return gifs;
}
