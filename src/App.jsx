import { useState } from 'react'
import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonStatistics1 from './pages/PokemonStatistics1'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
          path='/'
          element={<Home/>}
          />

        

        <Route
        element={<ProtectedRoutes/>}
        >
            <Route
              path='/pokedex'
              element={<Pokedex/>}
           />

            <Route
              path='/pokedex/:id'
              element={ <PokemonStatistics1/> }
           />
        </Route>

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
