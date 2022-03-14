import React from 'react'
import { generalId } from '../helpers/locationHelpers'

export const CharacterInfo = ({character}) => {


    console.log(character)
    return (
        <section className='info'>
            <div className='uno'>
                <article className='uno_info'>
                    <h3>Species</h3>
                    <p>{character.species}</p>
                </article>
                <article>
                    <h3>origin</h3>
                    <p>{character.origin?.name}</p>
                </article>
                <article>
                    <h3>First apparition</h3>
                    <p>{character!== null ? generalId(character.episode?.[0]) : `Sorry, We don't have information about this location`}</p>
                </article>
            </div>
        </section>
    )
}
