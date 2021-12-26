import React, { useState } from 'react'

const Hookfi = () =>
{
    const [color, setColor] = useState("red")
    const [name, setName] = useState('.')
    const changeColor = () =>
    {
        setColor("hi all")
    }
    const nameChange = () =>
    {
        setName("Ashar")
    }
    const textChange = () =>
    {
        setName("Learn New thing daily")
    }
    const myFavorite = () =>
    {
        setColor("pink")
    }

    return (
        <div>
            <h1>Hi Good Morning{color}</h1>
            <button type="button" onClick={() => setColor("blue")}>change color to blue</button>
            <button onClick={changeColor}>Chnage color here</button>
            <h2>You are my sunsine{name}</h2>
            <button onClick={nameChange}>textChange</button>
            <div>
                <p>Good to go{name}</p>
                <button onClick={textChange}>Change Text</button>
                <h1>My favorite color is {color}!</h1>
                <button onClick={myFavorite}>pink</button>

            </div>
        </div>
    )
}

export default Hookfi
