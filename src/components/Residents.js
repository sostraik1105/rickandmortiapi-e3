import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Residents = ({url, key}) => {

    const [character, setCharacter] = useState({})

    useEffect(()=>{
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, [url]);

    console.log(character)
    return (
        <div id={key}>
            <h1>{character.name}</h1>
            <img src={character.image} alt="" />
        </div>
    )
}
