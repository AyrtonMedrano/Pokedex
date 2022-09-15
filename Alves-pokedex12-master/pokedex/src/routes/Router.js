import DetailsPage from '../pages/DetailsPage/DetailsPage'
import HomePage from '../pages/HomePage/HomePage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details/:name" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
