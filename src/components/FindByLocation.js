import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { randomLocation } from '../helpers/locationHelpers'
import { Residents } from './Residents';
import { characterId } from '../helpers/locationHelpers';

export const FindByLocation = () => {

    const [ location, setLocation ] = useState({});
    const [ residents, setResidents ] = useState([])

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${randomLocation()}`)
            .then(res => {
                setLocation(res.data)
                setResidents(res.data.residents)
            })
    }, []);

    console.log(location);
    return (
    <>
        <div>
            {location.name}
        </div>
        <section>
        {
            residents.length === 0 
            
            ? <h2>No existen personajes en este sitio</h2>
            
            : residents.map((char) => (
                <article key={characterId(char)}>
                    <Residents url={char}/>
                </article>
            )
            ) 
        }
        </section>
            
        
    </>
    )
}
