import React from 'react'
import Paciente from './Paciente'

const Listado = ({pacientes,setPaciente}) => {
  
  return (
    <div className='p-[20px] md:w-1/2 lg:w-3/5 bg-slate-600 rounded-md text-white md:overflow-y-scroll h-screen'>
        <h1 className='text-center font-bold text-2xl'>Listado de pacientes</h1>
        <h2 className='text-center font-bold text-xl'>-Administa pacientes-</h2>

        {pacientes.map((paciente) => 
           <Paciente 
           key={paciente.id}
           paciente={paciente}
           setPaciente={setPaciente}
           />

        )}

        
        


    </div>
  )
}

export default Listado