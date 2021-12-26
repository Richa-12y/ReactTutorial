import React, { useState } from 'react'

const Hookse = () =>
{
    const [food, setFood] = useState("you are here!")
    const textChange = () =>
    {
        setFood('i love fish')
    }
    return (
        <div>
            <p>This {food}</p>
            <button onClick={textChange}>click here</button>
        </div>
    )
}

export default Hookse
