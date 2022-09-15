import styled from 'styled-components'

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2em 2em;
  width: 100%;
  min-height: 100vh;
  padding: 2%;
  justify-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;

  }
  @media screen and (min-device-width: 481px) and (max-device-width: 1180px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

  }
`
export const ContainerPokedex = styled.div`
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;

  }
  @media screen and (min-device-width: 481px) and (max-device-width: 1180px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

  }
`
