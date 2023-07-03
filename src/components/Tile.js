import React from 'react';
import TileList from './TileList'


function Tile({hogs}){
    const showHogs = hogs.map((hog) => {
        return <TileList key={hog.name} hog={hog} />
    })
    return(
        <div className="porkers">{showHogs}</div>
    )
}
export default Tile