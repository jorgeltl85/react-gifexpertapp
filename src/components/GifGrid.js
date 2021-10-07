import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category}) => {

    const { data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3 className="card animate__animated animate__bounce"> { category } </h3>
            { loading && <p className="card animate__animated animate__flash">Loading</p>}
            
             <div className="card-grid">
            {
                // Si map no tiene return es un implisito
                // tambien se le puede pasar { ...img }
                images.map( ims => (
                   <GifGridItem key={ims.id} img={ims} />
                ))
            }
            </div> 
        </>
    )
}