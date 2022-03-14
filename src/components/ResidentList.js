import React from 'react';
import LocationInfo from './LocationInfo';

const CharactersList = ( { location, residents } ) => {

    return (
        <div className='center'>
            <article className='frame-current-place grid'>
                <section className="category">Name:
                    <p className="details">{location.name}</p>
                </section>
                <section className="category">Type:
                    <p className="details">{location.type}</p>
                </section>
                <section className="category">Dimension:
                    <p className="details">{location.dimension}</p>
                </section>
                <section className="category">Population
                    <p className="details">{location.residents?.length}</p>
                </section>
            </article>
            <ul className='grid-characters-collection characters-collection' >
                {
                    residents?.map( resident => (
                        <LocationInfo residentUrl = { resident } key = { resident }/>
                    ))
                }
            </ul>
        </div>
    );
};

export default CharactersList;