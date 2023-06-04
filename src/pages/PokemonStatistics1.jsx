import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'


function PokemonStatistics1() {
  

  const pokemonstatus = useSelector( state => state.pokemonStatistics)
  console.log(pokemonstatus);
  return (
    <div>
      <h1>si {pokemonstatus}</h1>
    </div>
  )
}

export default PokemonStatistics1
