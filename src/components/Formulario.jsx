import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MensajeValidacion from './MensajeValidacion'

const Formulario = ({videojuego}) => 
{

  const navigate = useNavigate()

  const [error, setError] = useState(false)

  const [form, setForm] = useState({
      nombre:     videojuego?.nombre ?? "",
      genero:videojuego?.genero ??"",
      caratula:      videojuego?.caratula ?? "",
      plataforma:      videojuego?.plataforma ?? "",
      produccion:      videojuego?.produccion ?? "",
      fecha:      videojuego?.fecha ??"",
      precio:   videojuego?.precio ??"",
      descripcion:   videojuego?.descripcion ??""
  })

  const handleChange = (e) =>
  {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }


    const handleSubmit = async(e) =>
    {
      e.preventDefault()
      if(Object.values(form).includes(""))
      {
        console.log("error");
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2500);
        return
      }

      if(videojuego?.id)
      {
        const url = `http://localhost:4000/videojuegos/${videojuego.id}`
        const peticion = await fetch(url,{
            method:'PUT',
            body:JSON.stringify(form),
            headers:{'Content-Type':'application/json'}
        })
        const respuesta = await peticion.json()
        navigate('/videojuegos')
      }
      else
      {
        try {
          
          const url = "http://localhost:4000/videojuegos"
          const peticion = await fetch(url,{
              method:'POST',
              body:JSON.stringify(form),
              headers:{'Content-Type':'application/json'}
          })
          const respuesta = await peticion.json()
          navigate('/videojuegos')
  
        } catch (error) {
          console.log(error);
        }
      }

    }




  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-lg shadow-lg md:w-3/4 mx-auto'>
        
    <h1 className='text-gray-800 font-bold uppercase text-center text-xl mb-4'>
      {videojuego?.id ? <p>Actualizar videojuego</p> : <p>Registrar videojuego</p>}
    </h1>

    {
      error && <MensajeValidacion tipo={'bg-red-700'}>Existen campos vacíos</MensajeValidacion>
    }

    <form onSubmit={handleSubmit}>
        <div>
          <label 
          htmlFor='nombre'
          className='text-gray-700 uppercase font-bold'>Nombre del videojuego: </label>
          <input 
          id='nombre'
          type="text" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='nombre del videojuego'
          name='nombre'
          value={form.nombre}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='genero'
          className='text-gray-700 uppercase font-bold'>Genero: </label>
          <input 
          id='genero'
          type="text" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='genero del videojuego'
          name='genero'
          value={form.genero}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='caratula'
          className='text-gray-700 uppercase font-bold'>Caratula: </label>
          <input 
          id='caratula'
          type="text" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='url de la caratula'
          name='caratula'
          value={form.caratula}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='precio'
          className='text-gray-700 uppercase font-bold'>Precio: </label>
          <input 
          id='precio'
          type="text" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='precio del videojuego'
          name='precio'
          value={form.precio}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='plataforma'
          className='text-gray-700 uppercase font-bold'>Plataforma: </label>
          <input 
          id='plataforma'
          type="text" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='plataforma del videojuego'
          name='plataforma'
          value={form.plataforma}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='produccion'
          className='text-gray-700 uppercase font-bold'>Produccion: </label>
          <input 
          id='produccion'
          type="text" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='produccion del videojuego'
          name='produccion'
          value={form.produccion}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='fecha'
          className='text-gray-700 uppercase font-bold'>Fecha de ingreso: </label>
          <input 
          id='fecha'
          type="date" 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          name='fecha'
          value={form.fecha}
          onChange={handleChange}
          />
        </div>

        <div>
          <label 
          htmlFor='descripcion'
          className='text-gray-700 uppercase font-bold'>Descripcion: </label>
          <textarea 
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
          placeholder='Describe los descripcion'  
          name='descripcion'
          value={form.descripcion}
          onChange={handleChange}/>
        </div>

        <input 
        id='sintomas'
        type="submit"
        className='bg-sky-800 w-full p-3 
        text-white uppercase font-bold rounded-lg 
        hover:bg-sky-900 cursor-pointer transition-all'
        value={videojuego?.id ? 'Actualizar videojuego' : 'Registrar videojuego'} 
        />

      </form>
    </div>
  )
}

export default Formulario