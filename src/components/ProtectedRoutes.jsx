import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoutes() {
    const pokestate = useSelector(state => state.pokemonStatistics)
    const userState = useSelector( state => state.name )
    if (pokestate) {
    return <Outlet/>
    }
    if (userState) {
    return <Outlet/>
    }else{
       return <Navigate to='/'/>
    }
}

export default ProtectedRoutes
