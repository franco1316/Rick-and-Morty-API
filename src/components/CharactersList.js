import React from 'react';
import LocationInfo from './LocationInfo';

const CharactersList = ( { residents } ) => {

    return (
        <div>
            {
                residents?.map( resident => (
                    <LocationInfo residentUrl = { resident } key = { resident } />
                ))
            }
        </div>
    );
};

export default CharactersList;