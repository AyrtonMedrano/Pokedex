import styled from 'styled-components'

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2em 2em;
  max-width: 100vw;
  justify-items: center;
  padding: 2%;
  
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 1180px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`
