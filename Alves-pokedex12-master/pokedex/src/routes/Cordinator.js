export const goToHomePage = (navigate) => {
  navigate('/')
}
export const goToDetailsPage = (navigate, pokemonName) => {
  navigate(`/details/${pokemonName}`)
}
export const goToPokedexPage = (navigate) => {
  navigate('/pokedex')
}
