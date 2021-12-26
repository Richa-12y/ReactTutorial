import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
export default function Product ()
{
    const navigate = useNavigate();
    const params = useParams();
    const handleClick = function ()
    {
        navigate('/');
    }
    return (
        <div>
            <h2>Product Details: {params.id}</h2>
            <button onClick={handleClick}>go to home</button>
        </div>
    )
}
