import React from 'react'
import { Shop3d } from "../components/Shop3d";
import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <>
    <div className='w-full flex flex-col md:flex-row md: items-center'>
        <div className='w-full h-80 md:h-screen'>
            <Shop3d></Shop3d>
        </div>
        <div className='w-full'>
            <h1 className='block w-max mx-auto text-3xl text-white mb-6 md:mb-20 md:text-6xl 2xl:text-8xl'>Simply Store</h1>
            <h3 className='font-light px-2 text-center md:text-xl md:px-6 md:mb-15 lg:text-2xl 2xl:text-5xl text-white'>
            "¡Bienvenido a nuestra tienda en línea! Estamos emocionados de ofrecerte una amplia selección de productos de alta calidad a precios razonables. No dudes en contactarnos si tienes preguntas o necesitas ayuda para encontrar algo específico. ¡Gracias por visitar nuestra tienda en línea! "
            </h3>
            <Link to={"/products"} className='px-6 py-2 bg-cyan-600 block w-max mx-auto rounded-xl md:text-xl mt-10 text-white hover:bg-cyan-400 hover:border-2'>
              Ver productos
            </Link>
            
        </div>
    </div>
    
    </>
  )
}

export default LandingPage