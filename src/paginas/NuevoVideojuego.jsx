import React from 'react'
import Formulario from '../components/Formulario'

const NuevoVideojuego = () => {
  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Agregar videojuego</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>Completa los siguientes campos para regsitrar un nuevo videojuego en la plataforma</p>
      <Formulario/>
    </div>
  )
}

export default NuevoVideojuego