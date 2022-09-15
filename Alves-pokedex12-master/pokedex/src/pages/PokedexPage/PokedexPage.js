import React from 'react'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { ContainerGrid, ContainerPokedex } from './PokedexStyled'
import Header from '../../components/Header/Header'

const PokedexPage = () => {

  const pokedexStorage = JSON.parse(localStorage.getItem('pokedex'))

  const pokedexList = pokedexStorage.map(pokemon => {
    return (
      <div key={pokemon.name}>
        <PokemonCard pokeName={pokemon} />
      </div>
    )
  })

  return (
    <ContainerPokedex>
      <Header />
      <ContainerGrid>{pokedexList}</ContainerGrid>
    </ContainerPokedex>
  )
}

export default PokedexPage
