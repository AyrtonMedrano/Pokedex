import React from 'react'
import { Div } from './style'
import PokemonLogo from '../../assets/PokemonLogo.png'
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage, goToHomePage } from '../../routes/Cordinator'

const Header = () => {

  const navigate = useNavigate()

  return (
    <Div>
      <img
        src={PokemonLogo}
        alt='Logo Pokémon'
        onClick={()=>goToHomePage(navigate)}
      />
      <button
        onClick={() => goToPokedexPage(navigate)}
      >
        Pokédex
      </button>
    </Div>
  )
}

export default Header