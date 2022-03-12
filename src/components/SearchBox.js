import React from 'react';
import { useState } from 'react';
import axios from 'axios'


const SearchBox = ( {setLocation} ) => {

    const [ search, setSearch ] = useState("")

    const searchLocation = () => {
        axios.get( ` https://rickandmortyapi.com/api/location/${ search } ` )
        .then( res => setLocation( res.data ) )
    }

    return (
        <div>
            <input
            type="text" 
            onChange = { e => setSearch( e.target.value ) } 
            value = { search } >
            </input>
                <button onClick={searchLocation}>
                    Search
                </button>
            
            
        </div>
    );
};

export default SearchBox;