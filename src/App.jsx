import { useState } from 'react'
import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'

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
          path='/pokedex'
          element={<Pokedex/>}
        />

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
