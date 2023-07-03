import React from "react";

function Sort({sortBy, setSortBy}){
    return(
        <div>
            <select name="Sort" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}

export default Sort