import React from 'react'
import useResources from './useResources'

const ResourceList = ( { resource } ) => {
    const list = useResources( resource )
    return (
        <ul>
            { list.map( item => <li key={ item.id }> { item.title }</li> ) }
        </ul>
    )
}

export default ResourceList