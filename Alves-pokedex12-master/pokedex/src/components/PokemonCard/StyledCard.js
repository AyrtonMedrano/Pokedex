import Styled from 'styled-components'
export const CardDiv = Styled.div`
  position: relative;
  width:440px;
  height:210px;
  border-radius:12px;
  background-color: ${props => {
      switch (props.pokeType) {
        case 'grass':
          return '#729F92'
        case 'fire':
          return '#EAAB7D'
        case 'poison':
          return '#AD30AE'
        case 'flying':
          return '#6892B0'
        case 'water':
          return '#71C3FF'
        case 'bug':
          return '#76A866'
        case 'normal':
          return '#BF9762'
        case 'dark':
          return '#5C3265'
        case 'dragon':
          return '#004170'
        case 'electric':
          return '#ccb85c'
        case 'fairy':
          return '#EC9FE6'
        case 'fighting':
          return '#CE7069'
        case 'ghost':
          return '#5289AC'
        case 'ground':
          return '#D89030'
        case 'ice':
          return '#30CEC0'
        case 'psychic':
          return '#F65076'
        case 'rock':
          return '#C7A78B'
        case 'steel':
          return '#BBBBBB'
        default:
          return
      }
    }
  };

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width:350px;
    height:210px;
    left:1%;
    }
  @media (min-width:600px) (max-device-width: 800px)  { 
    width:80%;
    height:180px;}
  @media screen and (min-device-width: 481px) and (max-device-width: 1180px) {
    width:90%;
    height:180px;
  }
`
export const MinText = Styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: white;
  position: absolute;
  top: 25px;
  left: 23px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 14px;
  }

`
export const Title = Styled.h1`
  width: 159px;
  height: 39px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: white;
  position: absolute;
  top: 40px;
  left: 23px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 20px;
  }
`
export const Container = Styled.div`
  width: 100%;
  height: 100%;
`
export const DetailsText = Styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: white;
  margin-left:5%;
  margin-top:10%;
`
export const CatchButton = Styled.button`
  position:absolute;
  bottom:5%;
  right:5%;
  width:30%;
  border-radius:5px;
  cursor:pointer;
  font-family: 'Inter';
  font-style: bold;
  font-weight: 700;
  font-size: 20px;
  line-height: 19px;
  color: white;
  background-color:#fff44444;
  border:none;
  :hover{
    background-color:#fff88888;
  }
`

export const TypeDiv = Styled.div`
  width: 99px;
  height: 31px;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  padding: 5px;
  margin: 1px;
  position: relative;
  top:89px;
  left:23px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => {
    switch (props.type) {
      case 'grass':
        return '#70B873'
      case 'fire':
        return '#F44900'
      case 'poison':
        return '#AD61AE'
      case 'flying':
        return '#6892B0'
      case 'water':
        return '#33A4F5'
      case 'bug':
        return '#316520'
      case 'normal':
        return '#8A8A8A'
      case 'dark':
        return '#5C5365'
      case 'dragon':
        return '#0A6CBF'
      case 'electric':
        return '#F4D23B'
      case 'fairy':
        return '#EC8FE6'
      case 'fighting':
        return '#CE4069'
      case 'ghost':
        return '#5269AC'
      case 'ground':
        return '#D97745'
      case 'ice':
        return '#74CEC0'
      case 'psychic':
        return '#F67176'
      case 'rock':
        return '#C7B78B'
      case 'steel':
        return '#BBBBBB'
      default:
        return
    }
  }};

`

export const Image = Styled.img`
  position:absolute;
  right:0;
  top:0;
`
export const DetailsButton = Styled.button`
  position:absolute;
  bottom:5%;
  left:23px;
  cursor:pointer;
  width:20%;
  border: none;
  background-color:transparent;
  color: #FFFFFF;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  text-decoration: underline;
  /* overflow:hidden; */
`
export const PokemonImage = Styled.img`
  position:absolute;
  top:-20%;
  right:0;
  width:193px;
  height:193px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width:140px;
    height:180px;

  }
  @media (min-width:600px) and (max-device-width:800px) { 
    width:140px;
    height:180px;}
    @media screen and (min-device-width: 801px) and (max-device-width: 1180px) {
    width:140px;
    height:180px;
    }
`
export const TypeText = Styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: white;
  text-align: right;
`
