import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"
//Custom
export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    })

    //un efecto no puede ser async
    useEffect(() => {
        
        getGifs( category )
        .then( imgs => {
            setstate( {
                data:imgs,
                loading:false
            });
        });
        
    }, [ category ])

    return state; // { data:[], loading: true }
}