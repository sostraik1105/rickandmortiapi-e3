import React from 'react'

export const LocationInfo = ({location}) => {
    return (
        <section className='info'>
                <article>
                    <h3>Name</h3>
                    <p>{location.name}</p>
                </article>
                <article>
                    <h3>Type</h3>
                    <p>{location.type}</p>
                </article>
                <article>
                    <h3>Dimension</h3>
                    <p>{location.dimension}</p>
                </article>
                <article>
                    <h3>Residents</h3>
                    <p>{location.residents?.length}</p>                
                </article>
            </section>
    )
}
