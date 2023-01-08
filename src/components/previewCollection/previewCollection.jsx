import React from 'react'
import './previewCollection.css'
import CollectionItem from '../collectionItem/collectionItem'

const previewCollection=({title,items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,idx)=> idx<4)
                .map(({id,...itemProps})=>(
                    <CollectionItem key={id}  {...itemProps}  /> 
                ))}
        </div>
    </div>
)


export default previewCollection