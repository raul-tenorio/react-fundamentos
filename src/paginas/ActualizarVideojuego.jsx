import React from 'react'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ActualizarVideojuego = () => 
{
  const {id} = useParams()
  const [url, setURL] = useState(id)
  const [videojuego, setVideojuego] = useState({})
  
  useEffect(() => 
  {
    const constultarVideojuego = async() => {
      try 
      {
        const peticion = await fetch(`http://localhost:4000/videojuegos/${url}`)
        const respuesta = await peticion.json()
        if(url == respuesta.id)
        {
          console.log(respuesta);
          setVideojuego(respuesta)
        }
      } catch (error) 
      {
        console.log(error);
      }
    }
    constultarVideojuego()
  },[])
  
  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Actualizar videojuego</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>En este módulo te permite actualizar los datos de un videojuego</p>
      {
        Object.keys(videojuego).length > 0 ?
          (
            <Formulario videojuego={videojuego}/>
          )
          :
          (
            <p className="bg-red-900 border-t border-b border-red-900 text-white px-4 py-3 m-5 text-center rounded-lg">No existe los datos de ese videojuego</p>
          ) 
      }
    </div>
  )
}

export default ActualizarVideojuego