import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Residents = ({url}) => {

    const [character, setCharacter] = useState({})

    useEffect(()=>{
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, [url]);

    return (
        <div id={character.id}>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
        </div>
    )
}
