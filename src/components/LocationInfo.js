import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/App.css'

const LocationInfo = ( { residentUrl} ) => {

    const [ character, setCharacter ] = useState ( "" )

    useEffect( () => {
        axios.get( residentUrl )
        .then( res => setCharacter( res.data ) )
    }, [ residentUrl ] );


    return (
        <div>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
        </div>
    );
};

export default LocationInfo;