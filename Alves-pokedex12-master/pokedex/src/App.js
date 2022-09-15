import React from 'react'
import { Div } from './style'
import Router from './routes/Router'
import GlobalState from './global/GlobalState'
import { GlobalStyled } from './global/GlobalStyled'

function App() {
  return (
    <Div>
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>
    </Div>
  )
}

export default App
