import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CharacterInfo } from './CharacterInfo';

export const Residents = ({url}) => {

    const [character, setCharacter] = useState({})

    useEffect(()=>{
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, [url]);

    console.log(character);

    return (
        <div id={character.id}>
            <div className='image'>
                <img src={character.image} alt={character.name} />
                <span>{character.status}</span>
            </div>
            <div className='charInfo'>
                <h3>{character.name}</h3>
                <CharacterInfo character={character} />
            </div>
        </div>
    )
}
