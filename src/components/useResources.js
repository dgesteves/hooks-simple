import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {
    const [ list, setList ] = useState( [] )

    useEffect( () => {
        ( async resource => {
            const res = await axios.get( `https://jsonplaceholder.typicode.com/${ resource }` )
            setList( res.data )
        } )( resource )
    }, [ resource ] )
    return list
}

export default useResources