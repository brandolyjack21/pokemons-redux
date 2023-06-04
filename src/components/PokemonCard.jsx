import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './pokemoncard.css'
import { useSelector, useDispatch } from 'react-redux'
import { pokemonDescriptionStatistics } from '../store/slices/pokemonStatistics.slice'
import { useNavigate } from 'react-router-dom'

function PokemonCard({ pokeapi }) {

    const pokestate = useSelector(state => state.pokemonStatistics)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState({})
  useEffect(() => {
    axios.get(pokeapi)
         .then(res => setPokemon(res.data))
         .catch(error => console.log(error))
  },[])

  
  const updateStatus = () => {
    dispatch( pokemonDescriptionStatistics( pokeapi ) )
    console.log(pokestate, 'este es el pokestate');
    navigate('/pokedex/1')
  }
 

  return (
    
        <div className='container__card-pokemon' onClick={() => updateStatus( )}>
          <h2>{pokemon.name}</h2>
          <div className='container__statistics'>
            <p>types: {pokemon?.types?.[0].type.name},{pokemon?.types?.[1]?.type.name}</p> 
            <p>Hp: {pokemon.stats?.[0].base_stat}</p>
            <p>Attack: {pokemon.stats?.[1].base_stat}</p>
            <p>Defense: {pokemon.stats?.[2].base_stat}</p>
            <p>Speed: {pokemon.stats?.[3].base_stat}</p>
            <img src={ pokemon.sprites?.other.dream_world.front_default } alt="" />
          </div>
        </div>
  )
}

export default PokemonCard
