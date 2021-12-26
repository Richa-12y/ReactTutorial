import React, { useState } from 'react'

export default function Hook ()
{
    const [name, setName] = useState('');
    let handleChange = function (e)
    {
        setName(e.target.value);
    }
    return (
        <div>
            <h2>Hook: {name}</h2>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}
