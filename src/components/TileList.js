import React, {useState} from 'react';

function TileList({hog}){
    const [isClicked, setIsClicked] = useState(false)
    const newInfo = (
        <div>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>{hog.greased ? "Greased" : ""}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
    )
    return(
        <div className= "pigTile">
            <img onClick={() => setIsClicked(!isClicked)} src={hog.image}/>
            <p>{hog.name}</p>
            {isClicked ? newInfo : null}
        </div>
    )
}

export default TileList