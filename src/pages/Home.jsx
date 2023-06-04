import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import { useSelector, useDispatch } from 'react-redux'
import { rename } from '../store/slices/name.slice'
import { userName } from '../store/slices/userName.slice'
import { useState } from 'react'

function Home() {

  const username = useSelector( state => state.userName)
  console.log(username, 'este es el username')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector( state => state.name )
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch( rename(name) )

    if (user) {
      navigate('/pokedex')
    }
  }

  

  return (
    <div className='container__home-page'>
      <div className='container__img-pokemon'>
          <h1>Hello trainer!</h1>
          <img src="https://th.bing.com/th/id/R.f121c549821a9d26952382cea181a3dd?rik=NUXe%2b0Yb8mMR0A&riu=http%3a%2f%2fimg1.wikia.nocookie.net%2f__cb20121227192136%2fdoblaje%2fes%2fimages%2fc%2fc2%2fAsh_Ketchum_BW.png&ehk=fqypw1uYP5crzGpId10V2Z71HYXfxVCeVDUHZubil%2bw%3d&risl=&pid=ImgRaw&r=0" alt="personaje de pokemon" />
      </div>
      <div className='container__input-pokemon'>
          <p>Give me your name to start</p>
          <form onSubmit={ handleSubmit }>
            <div>
              <input type="text"
              value={name}
              onChange={ e => setName(e.target.value)}
              />
              <button type='submit'>
                <i class='bx bx-paper-plane'></i>
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Home
