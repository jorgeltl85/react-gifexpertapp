import React from 'react'

export const GifGridItem = ( { img }) => {

    const { id, title, url }  = img;

    console.log("-->Lo que llego a GifGridItem es:", id, title, url  )
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
