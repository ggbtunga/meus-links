import React from 'react'
import Links from './Links'

const DashBoard = () => {
  return (
    <div className='absolute flex flex-col justify-center items-center max-w-xs h-350 bg-dash-board mt-100px border-2 border-neutral-white rounded-lg'>
      <img src='./images/fotocinza.jpg' alt='foto_de_perfil' className='w-1/4 relative -top-10 border-2 border-neutral-white rounded-lg'></img>
      <h1 className='text-white my-4 font-bold text-xl'>Meus Links</h1>
      <Links/>
    </div>
  )
}

export default DashBoard