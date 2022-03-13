import axios from 'axios'
import React, { useState } from 'react'

export const SearchBox = ({changeLocation}) => {

    const [search, setSearch] = useState("")

    const searchLocation = ()=>{
        axios.get(`https://rickandmortyapi.com/api/location/?name=${search}`)
          .then(res=> {
              changeLocation(res.data.results[0])  
          })
    }

    return (
        <div>
            <input 
                type="text" 
                onChange={e=>setSearch(e.target.value)}
                value={search}
            />
            <button onClick={searchLocation}>
                Search
            </button>
        </div>
    )
}
