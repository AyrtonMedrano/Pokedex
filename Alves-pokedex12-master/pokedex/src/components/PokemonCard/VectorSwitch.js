import React from 'react'
import VectorBug from '../../assets/VectorBug'
import VectorDark from '../../assets/VectorDark'
import VectorDragon from '../../assets/VectorDragon'
import VectorEletric from '../../assets/VectorEletric'
import VectorFairy from '../../assets/VectorFairy'
import VectorFighting from '../../assets/VectorFighting'
import VectorFire from '../../assets/VectorFire'
import VectorFlying from '../../assets/VectorFlying'
import VectorGhost from '../../assets/VectorGhost'
import VectorGrass from '../../assets/VectorGrass'
import VectorGround from '../../assets/VectorGround'
import VectorIce from '../../assets/VectorIce'
import VectorNormal from '../../assets/VectorNormal'
import VectorPoison from '../../assets/VectorPoison'
import VectorPsychic from '../../assets/VectorPsychic'
import VectorRock from '../../assets/VectorRock'
import VectorSteel from '../../assets/VectorSteel'
import VectorWater from '../../assets/VectorWater'

export default function VectorSwitch(props) {
  switch (props.type) {
    case 'grass':
      return <VectorGrass />
    case 'fire':
      return <VectorFire />
    case 'poison':
      return <VectorPoison />
    case 'flying':
      return <VectorFlying />
    case 'water':
      return <VectorWater />
    case 'bug':
      return <VectorBug />
    case 'normal':
      return <VectorNormal />
    case 'dark':
      return <VectorDark />
    case 'dragon':
      return <VectorDragon />
    case 'electric':
      return <VectorEletric />
    case 'fairy':
      return <VectorFairy />
    case 'fighting':
      return <VectorFighting />
    case 'ghost':
      return <VectorGhost />
    case 'ground':
      return <VectorGround />
    case 'ice':
      return <VectorIce />
    case 'psychic':
      return <VectorPsychic />
    case 'rock':
      return <VectorRock />
    case 'steel':
      return <VectorSteel />
    default:
      return
  }
}
