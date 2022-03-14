import React from 'react'

export const LocationInfo = ({location}) => {
    return (
<<<<<<< HEAD
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
=======
        <section className='infos'>
            <div className='info_one'>
                <article>
                    <h3>Name:</h3>
                    <p>{location.name}</p>                    
                </article>
                <article >
                    <h3>Type:</h3>
                    <p>{location.type}</p>
                </article>
                <article >
                    <h3>Dimension:</h3>
                    <p>{location.dimension}</p>
                </article>
                <article>
                    <h3>Residents:</h3>
                    <p>{location.residents?.length}</p>                
                </article>
            </div>
        </section>
>>>>>>> 47a3fd8deae5f41cdad5e94fe0eeb0fbb3c6b4c7
    )
}
