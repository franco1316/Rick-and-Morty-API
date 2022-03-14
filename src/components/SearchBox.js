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
        <header className='searchBox'>
            <div className="container-image">
                <input
                className = ' searchText '
                type = " text "
                onChange = { e => setSearch( e.target.value ) }
                value = { search } >
                </input>
                    <button onClick={searchLocation} className='searchButton'>
                        Search
                    </button>
                <div className='container-text-image'></div>
                
            </div>
        </header>
    );
};

export default SearchBox;