import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MostrarVideojuego = () => 
{
  const {id} = useParams()
  const [url, setURL] = useState(id)
  const [videojuego, setVideojuego] = useState({})

  useEffect(() => 
  {
        const consultarVideojuego = async() => {
          try 
          {
            const peticion = await fetch(`http://localhost:4000/videojuegos/${url}`)
            const respuesta = await peticion.json()
            if(url == respuesta.id)
            {
              setVideojuego(respuesta)
            }
          } catch (error) 
          {
            console.log(error);
          }
      }
      consultarVideojuego()
  }, [])
  

  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Detalle del Videojuego</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>Módulo para mostrar la descripcion al detalle de un videojuego</p>
      <br className='mt-3'/>
      {
        Object.keys(videojuego).length > 0 ?
        (
          
          <div   style={{width:1030, display:'flex', flexDirection:'row', position:'absolute', justifyContent:'space-between'}}>
            <div>
              <img src={videojuego.caratula} alt="caratula" style={{width:1900,height:420}} />
            </div>
            
            <div style={{margin:15}}>
                <p align="left" style={{fontSize:15}}>
                    <span style={{fontSize:15}}><b>Nombre del videojuego:</b> </span>
                    {videojuego.nombre}
                </p>
                <br/>
                <p style={{fontSize:15}}>
                    <span style={{fontSize:15}}><b>Genero:</b></span>
                    {videojuego.genero}
                </p>
                <br/>
                <p align="left" style={{fontSize:15}}>
                    <span style={{fontSize:15}}><b>Descripcion:</b> </span>
                    <justify>
                    {videojuego.descripcion}
                    </justify>
                </p>
                <br/>
                <p style={{fontSize:15}}>
                    <span style={{fontSize:15}}><b>Fecha de lanzamiento:</b> </span>
                    {videojuego.fecha}
                </p>
                <br/>
                <p style={{fontSize:15}}>
                    <span style={{fontSize:15}}><b>Plataforma:</b></span>
                    {videojuego.plataforma}
                </p>
                <br/>
                <p style={{fontSize:15}}>
                    <span style={{fontSize:15}}><b>Produccion:</b></span>
                    {videojuego.produccion}
                </p>
                <br/>
                <p style={{fontSize:15}}>
                    <span style={{fontSize:15}}><b>Precio:</b> </span>
                    {videojuego.precio}
                </p>
            </div>
          </div>
        )
        :
        (
          <p className="bg-red-900 border-t border-b border-red-900 text-white px-4 py-3 m-5 text-center rounded-lg">No existe los datos de ese videojuego</p>
        )
      }
    </div>
  )
}

export default MostrarVideojuego