import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage } from '../../routes/Cordinator'
import {
    CardDiv,
    MinText,
    Title,
    Container,
    CatchButton,
    DetailsButton,
    TypeDiv,
    Image,
    PokemonImage,
    TypeText,
} from './StyledCard'
import Pokeball from '../../assets/Pokeball.png'
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import VectorSwitch from './VectorSwitch'
import Loader from '../Loader/Loader'

export const PokemonCard = (props) => {

    const navigate = useNavigate()
    const { states, setters, requests } = useContext(GlobalStateContext)
    const [pokeName, setPokeName] = useState("")
    const [order, setOrder] = useState("")
    const [types, setTypes] = useState()
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPokemonDetails(props.pokeName)
    }, [])


    const getPokemonDetails = (pokeName) => {
        setLoading(!loading)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((res) => {
                setPokeName(res.data.name)
                setOrder(res.data.id)
                setTypes(res.data.types)
                setImage(res.data.sprites.other["official-artwork"].front_default)
            })
            .catch((err) => {
                alert(err.response.data)
            })

    }

    const loader = () => {
        if (loading === true) {
            return <Loader />
        }
    }

    const listTypes = types && types.map((type) => {
        return (
            <TypeDiv key={type.slot} type={type.type.name}>
                <VectorSwitch type={type.type.name} />
                <TypeText key={type.slot}>{type.type.name.toUpperCase()}</TypeText>
            </TypeDiv>
        )
    })

    return (
        <Container >
            {/* <>{loader}</> */}
            <CardDiv pokeType={types && types[0].type.name}>
                <MinText># {order}</MinText>
                <Title>{pokeName.toUpperCase()}</Title>
                <>{listTypes}</>
                <DetailsButton onClick={() => goToDetailsPage(navigate, pokeName)}>Detalhes</DetailsButton>
                <Image src={Pokeball} alt="Imagem de uma pokebola" />
                <PokemonImage src={image} alt="imagem do pokemon selecionado" />
                {/* Ternário para definir o botão: Capturar ou Remover: */}
                {states.pokedex.includes(pokeName) ? (<CatchButton onClick={() => requests.removePokemon(pokeName)}>Remover</CatchButton>) : (<CatchButton onClick={() => requests.capturePokemon(pokeName)}>Capturar</CatchButton>)}
            </CardDiv>
        </Container>
    )
}