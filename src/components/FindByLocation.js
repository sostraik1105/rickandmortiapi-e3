import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { randomLocation } from '../helpers/locationHelpers';
import { SearchBox } from './SearchBox';
import { ResidentsList } from './ResidentsList';
import { LocationInfo } from './LocationInfo';


export const FindByLocation = () => {

    const [ location, setLocation ] = useState({});

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${randomLocation()}`)
            .then(res => {
                setLocation(res.data)
            })
    }, []);
    
    return (
    <>
        
        <SearchBox changeLocation={setLocation}/>
        {
            location.residents?.length 
            
            ? <LocationInfo location={location}/>

            : <h2>Sorry, We don't have information about this location</h2>
        }
        <ResidentsList charList={location.residents} />           
        
    </>
    )
}
