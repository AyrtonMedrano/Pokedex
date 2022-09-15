import React from "react"
import GlobalStateContext from "./GlobalStateContext"
import { useState, useEffect } from "react"
import axios from "axios"

const GlobalState = (props) => {
  // ESTADOS 
  // Lista de todos os pokemons e os da Pokedex
  const [allPokemons, setAllPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  
  // REQUISIÇÕES
  
  const getAllPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((res) => {
        setAllPokemons(res.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  // FUNÇÃO DE ADICIONAR À POKEDEX
  const capturePokemon = (pokeName) => {
    setPokedex([...pokedex, pokeName])
  }

  localStorage.setItem('pokedex', JSON.stringify(pokedex))

  // FUNÇÃO DE REMOVER DA POKEDEX
  const removePokemon = (pokeName) => {
    const newPokedex = pokedex.filter((pokemon) => {
      if (pokemon !== pokeName) {
        return pokemon
      }
    })
    setPokedex(newPokedex)
  }

  // ORGANIZANDO
  const states = { allPokemons, pokedex, isLoading  }
  const setters = { setPokedex, setIsLoading  }
  const requests = { getAllPokemons, capturePokemon, removePokemon }

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState