import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../pages/PokemonStatistics1.css'


function PokemonStatistics1() {
  const [pokemon, setPokemon] = useState('')
  const [pokeApi, setPokeApi] = useState('')

  const pokeState = useSelector( state => state.pokemonStatistics) 

  if (!pokemon) {
    setPokemon(pokeState)
  }
  useEffect(() => {
    axios.get( pokemon )
         .then( res => setPokeApi(res.data) )
         .catch( error => console.error(error) )

  }, [])
  console.log(pokeApi);

  return (
    <div className={ `container ${ pokeApi?.types?.[0].type.name }` }>
      <div className='container__pokemon--title'>
        <h4>Pokemon</h4>
      </div>
      <div className='container__pokemon--description'>
        <img src={ pokeApi.sprites?.other.dream_world.front_default } alt="" />
        <h1>{ pokeApi.name }</h1>
        <div className='container__w-h'>
          <div className='container__weight'>
           <span>weight: { pokeApi.weight }</span>
          </div>
          <div className='container__height'>
            <span>height: { pokeApi.height }</span>
          </div>
        </div>
        <div className='container__type'>
          <h2>Type</h2>
          <div className='container__types-name'>
            <div>{ pokeApi?.types?.[0].type.name }</div>
            <div>{ pokeApi?.types?.[1]?.type.name }</div>
          </div>
        </div>
        <div className='container__abilities'>
          <h3>Abilities</h3>
          <div className='container__abilities--name'>
            <div>{ pokeApi.abilities?.[0].ability.name }</div>
            <div>{ pokeApi.abilities?.[1].ability.name }</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonStatistics1
