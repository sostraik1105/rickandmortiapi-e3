import React from 'react'
import { generalId } from '../helpers/locationHelpers'

export const CharacterInfo = ({character}) => {
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
                    <p>
                        {
                            (character={} ? "loading" : (character.episode.length === 0) ? generalId(character?.episode) : `${generalId(character?.episode[0])}`)
                        }
                    </p>
                </article>
            </div>
        </section>
    )
}
