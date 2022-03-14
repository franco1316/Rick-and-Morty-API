import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/App.css'

const LocationInfo = ( { residentUrl} ) => {

    const [ character, setCharacter ] = useState ( " " )

    useEffect( () => {

        axios.get( residentUrl )
        .then( res => setCharacter( res.data ) )

    }, [ residentUrl ] );

    return (
        <li className='characters-frames'>
            <div className="container-img-character">
                <img src={character.image} alt="" className='img-character'/>
                <article className="flex-row tag-status">

                    <div className={`circle 
                    ${
                        character.status==="Alive"?"green":
                        character.status==="Dead"?"red":"gray"
                    }`}></div>

                    <section className='status'>{character.status}</section>

                </article>
            </div>

            

            <div className="spacing">
                <h2 className='character-name'>{character.name}</h2>
                <hr className='separator'/>
                <article className="i-character">
                    <section className="propertie">
                        <h3 className="name-propertie">Specie
                            <p className="value">{character.species}</p>
                        </h3>
                        <h3 className="name-propertie">Origin
                            <p className="value">{character.origin?.name}</p>
                        </h3>
                        <h3 className="name-propertie">Episodes where appear
                            <p className="value">{character.episode?.length}</p>
                        </h3>
                    </section>
                </article>
            </div>
        </li>
    );
};

export default LocationInfo;