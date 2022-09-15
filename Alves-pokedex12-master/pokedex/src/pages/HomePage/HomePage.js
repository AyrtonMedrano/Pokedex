import React from 'react'
import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { ContainerGrid } from './HomeStyled'
import Loader from '../../components/Loader/Loader'

const HomePage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.getAllPokemons()
  }, [requests])

  const allPokemonsList = states.allPokemons.map(pokemon => {
    return (
      <div key={pokemon.name}>
        <PokemonCard pokeName={pokemon.name} />
      </div>
    )
  })

  return (
    <div>
      <Header />
      <ContainerGrid>
        {states.isLoading === false ? allPokemonsList : <Loader />}
      </ContainerGrid>
    </div>
  )
}

export default HomePage
