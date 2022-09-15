import styled from 'styled-components'

export const DivHeader = styled.div`
display: flex;
width: 100vw;
height: 160px;
width: 100vw;
max-width: 100%;
overflow-x: hidden;
justify-content: center;
align-items: center;
img{    
    cursor: pointer;
    position: absolute;
    @keyframes flying {
        0%, 100% {
            transform: translateY(0)
        }
        50% {
            transform: translateY(15px);
        }
    }
    animation: flying infinite 3s ease-in-out;
}
button{
    margin: 0 30px 0 auto;
    width: 267px;
    height: 64px;
    background-color: #33A4F5;
    border-radius: 8px;
    border: none;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    box-shadow: 3px 3px 3px 2px gray;
    :hover{
        background-color: #e11f1f;
        border: 2px solid white;
        text-decoration: underline;
        cursor: pointer;
        transition: 0.2s;
    }
}
@media (max-width: 800px) {
    flex-direction: column;
    height: fit-content;
    img{
        position: absolute;
        top: 10px;
    }
    button{
        margin: 10px 0 20px 0;
        width: 250px;
        height: 60px;
        :active{
        background-color: #e11f1f;
        border: 2px solid white;
        text-decoration: underline;
        transition: 0.2s;
        }
    }
}`
export const Div1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100vw;
max-width: 100%;
overflow-x: hidden;
min-height: 100vh;
padding-bottom: 5%;
h5{
    font-family: 'Poppins';
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: white;
    margin-right: auto;
    margin-left: 7%;
}
@media (max-width: 800px) {
  padding-top: 40%;
}`
export const Div2 = styled.div`
display: flex;
position: relative;
align-items: center;
padding: 1% 2% 1% 2%;
width: 90%;
height: 500px;
border-radius: 20px;
@media (max-width: 800px) {
  flex-direction: column-reverse;
  height:fit-content;
  align-items: center;
  row-gap: 20px;
  padding-bottom: 20px;
}
background-color: ${props => {
    switch (props.pokemonTypes) {
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
`
export const Div3 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 20%;
height: 100%;
img{
    width: 75%;
}
@media (max-width: 800px){
  width: 90%;
  row-gap: 20px;
}`
export const Div3_1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: 45%;
background-color: #ffffff;
border-radius: 5px;
@media (max-width: 800px){
  width: 90%;
}`
export const Div3_2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: 45%;
background-color: #ffffff;
border-radius: 5px;
@media (max-width: 800px){
  width: 90%;
}`
export const Div4 = styled.div`
display: flex;
flex-direction: column;
width: 28%;
height: 100%;
margin-left: 2%;
background-color: #ffffff;
border-radius: 5px;
padding: 2% 1%;
p{  
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    margin-left: 10%;
}
span{
    margin-left: auto;
    margin-right: 15%;
}
@media (max-width: 800px){
  width: 80%;
  p{
    flex-direction: column;
  }
}`
export const Div5 = styled.div`
width: 23%;
height: 100%;
margin-left: 2%;
text-transform: capitalize;
@media (max-width: 800px){
  width: 80%;
  margin-top: 80%;
}`
export const Div5_1 = styled.div`
display: flex;
flex-direction: column;
row-gap: 10px;
width: 100%;
height: 30%;
border-radius: 5px;
padding: 1%;
span{
    display: flex;
    position: absolute;
    margin-left: -20px;
}
h3{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 19px;
color: white;
}
h1{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
color: white;
}`
export const Div5_2 = styled.div`
width: 100%;
height: 70%;
background-color: #ffffff;
border-radius: 5px;
padding: 4% 2%;
p{
    margin-top: 5%;
    margin-left: 10%;
    width: fit-content;
    padding: 5px;
    background-color: #ECECEC;
    border-radius: 2px;
}
@media (max-width: 800px){
  margin-top: 25%;
}`
export const ImgMain = styled.img`
position: absolute;
width: 21%;
right: 0;
transform: translate(-7%, -60%);
@media (max-width: 800px){
  width: 80%;
  transform: none;
  right: auto;
  left: auto;
  top: 0
}`
export const ImgPokeball = styled.img`
position: absolute;
height: 100%;
right: 0;
mix-blend-mode: screen;
`