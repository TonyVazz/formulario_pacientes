import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {id, nombre,apellido,numero,correo} = paciente;

  function handleEliminarPaciente() {
    eliminarPaciente(id);
  }

  return (
    <div className='mt-3 py-3 shadow-md rounded-lg pl-2 bg-slate-500'>
    <p className='font-bold mb-2 uppercase'> Nombres: <span className='font-normal ml-2 normal-case' >{nombre}</span></p>
    <p className='font-bold mb-2 uppercase'> Apellidos: <span className='font-normal ml-2 normal-case'>{apellido}</span></p>
    <p className='font-bold mb-2 uppercase'> Numero: <span className='font-normal ml-2 normal-case'>{numero}</span></p>
    <p className='font-bold mb-2 uppercase'> Correo Electronico: <span className='font-normal ml-2 normal-case'>{correo}</span></p>
    
    <div>
      <button className='py-2 ml-2 px-5 rounded-md text-white bg-gray-600 hover:bg-gray-300 border-zinc-50'
      onClick={handleEliminarPaciente}
      >
      Eliminar
      </button>
      <button className='py-2 ml-2 px-5 rounded-md text-white bg-gray-600 hover:bg-gray-300 border-zinc-50' 
      onClick={() => setPaciente(paciente)}
      >
      Modificar
      </button>
      
      
    </div>
  </div>
  )
}

export default Paciente