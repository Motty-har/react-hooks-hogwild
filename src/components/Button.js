import React from 'react';

function Button ({setIsGreased, isGreased}){
    return(
        <div>
            <button onClick={() => setIsGreased(!isGreased)}>Is it Greased?</button>
        </div>
    )
}

export default Button