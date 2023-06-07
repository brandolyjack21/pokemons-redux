import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from '../components/PokemonCard'
import '../components/pokedex.css'

function Pokedex() {
   
   const [pokeApi, setPokeApi] = useState([])
   useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
         .then( res => setPokeApi(res.data.results))
         .catch(error => console.error(error))
   },[])

   console.log(pokeApi, 'pokeapi traida');

  const name = useSelector(state => state.name)
  return (
    <div className='container__greeting'>
    <h1 className='h1'>Pokedex</h1>
    <span className='greeting'>Welcome <span className='user'>{name}</span>, here you can find your favorite pokemon</span>
    <div className='container__cards'>
      <div></div>
      <ul className='container__card-pokeapi'>
        {
          pokeApi.map( item => <PokemonCard pokeapi={item.url}/>)
        }
      </ul>
    </div>

    </div>
  )
}

export default Pokedex
