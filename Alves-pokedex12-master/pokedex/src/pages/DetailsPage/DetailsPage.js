import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import { DivHeader, Div1, Div2, Div3, Div3_1, Div3_2, Div4, Div5, Div5_1, Div5_2, ImgMain, ImgPokeball } from './DetailsStyled'
import Pokeball2 from '../../assets/Pokeball2.png'
import { TypeDiv, TypeText } from '../../components/PokemonCard/StyledCard'
import VectorSwitch from '../../components/PokemonCard/VectorSwitch'
import PokemonLogo from '../../assets/PokemonLogo.png'
import { goToHomePage, goToPokedexPage } from '../../routes/Cordinator'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

const DetailsPage = () => {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    getPokemon()
  }, [])

  const { states, setters, requests } = useContext(GlobalStateContext)
  const [pokemonFrontImg, setPokemonFrontImg] = useState('')
  const [pokemonBackImg, setPokemonBackImg] = useState('')
  const [pokemonMainImg, setPokemonMainImg] = useState('')
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonId, setPokemonId] = useState('')
  const [pokemonTypes, setPokemonTypes] = useState()
  const [hp, setHp] = useState()
  const [attack, setAttack] = useState()
  const [defense, setDefense] = useState()
  const [spAttack, setSpAttack] = useState()
  const [spDefense, setSpDefense] = useState()
  const [speed, setSpeed] = useState()
  const totalStats = hp + attack + defense + spAttack + spDefense + speed
  const [moveI, setMoveI] = useState()
  const [moveII, setMoveII] = useState('')
  const [moveIII, setMoveIII] = useState('')
  const [moveIV, setMoveIV] = useState('')

  const getPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`).then((res) => {
      console.log(res.data)
      setPokemonFrontImg(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
      setPokemonBackImg(res.data.sprites.versions['generation-v']['black-white'].animated.back_default)
      setPokemonMainImg(res.data.sprites.other['official-artwork'].front_default)
      setPokemonName(res.data.name)
      setPokemonId(res.data.id)
      setPokemonTypes(res.data.types)
      setHp(res.data.stats[0].base_stat)
      setAttack(res.data.stats[1].base_stat)
      setDefense(res.data.stats[2].base_stat)
      setSpAttack(res.data.stats[3].base_stat)
      setSpDefense(res.data.stats[4].base_stat)
      setSpeed(res.data.stats[5].base_stat)
      setMoveI(res.data.moves[0].move.name)
      setMoveII(res.data.moves[1].move.name)
      setMoveIII(res.data.moves[2].move.name)
      setMoveIV(res.data.moves[3].move.name)
    }).catch((err) => {
      console.log(err)
    })
  }

  const listTypes = pokemonTypes && pokemonTypes.map((type) => {
    return (
      <TypeDiv key={type.slot} type={type.type.name}>
        <VectorSwitch type={type.type.name} />
        <TypeText key={type.slot}>{type.type.name.toUpperCase()}</TypeText>
      </TypeDiv>
    )
  })

  return (
    <Div1>
      <DivHeader>
        <img
          src={PokemonLogo}
          alt='Logo Pokémon'
          onClick={() => goToHomePage(navigate)}
        />
        {states.pokedex.includes(pokemonName) ? (<button onClick={() => requests.removePokemon(pokemonName)}>Remover</button>) : (<button onClick={() => requests.capturePokemon(pokemonName)}>Capturar</button>)}
      </DivHeader>
      <h5>Detalhes</h5>
      <Div2 pokemonTypes={pokemonTypes && pokemonTypes[0].type.name}>
        <ImgPokeball src={Pokeball2} />
        <ImgMain src={pokemonMainImg} />
        <Div3>
          <Div3_1>
            <img src={pokemonFrontImg} />
          </Div3_1>
          <Div3_2>
            <img src={pokemonBackImg} />
          </Div3_2>
        </Div3>
        <Div4>
          <h2>Base Stats</h2>
          <p>HP <span>{hp}</span> <progress value={hp} max='160' /></p>
          <p>Attack <span>{attack}</span> <progress value={attack} max='160' /></p>
          <p>Defense <span>{defense}</span> <progress value={defense} max='160' /></p>
          <p>Sp. Atk <span>{spAttack}</span> <progress value={spAttack} max='160' /></p>
          <p>Sp. Def <span>{spDefense}</span> <progress value={spDefense} max='160' /></p>
          <p>Speed <span>{speed}</span> <progress value={speed} max='160' /></p>
          <p>Total <span>{totalStats}</span><progress value={totalStats} max='960' /></p>
        </Div4>
        <Div5>
          <Div5_1>
            <h3>#{pokemonId}</h3>
            <h1>{params.name}</h1>
            <span>{listTypes}</span>
          </Div5_1>
          <Div5_2>
            <h2>Moves</h2>
            <p>{moveI}</p>
            <p>{moveII}</p>
            <p>{moveIII}</p>
            <p>{moveIV}</p>
          </Div5_2>
        </Div5>
      </Div2>
    </Div1>
  )
}

export default DetailsPage