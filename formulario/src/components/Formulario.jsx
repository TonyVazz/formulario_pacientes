import React, {useEffect,useState} from 'react';

//LOCALSTORAGEAGREGAR

const Formulario = ({pacientes, setPacientes, paciente}) => {

//crear hooks
const [nombre,setNombre] = useState('');
const [apellido,setApellido] = useState('');
const [numero,setNumero] = useState('');
const [correo,setCorreo] = useState('');
const [error, setError] = useState(false);

useEffect(() => {
  if(Object.keys(paciente).length >0 ){
    console.log('useEffect');
  console.log(paciente);
  const {nombre,apellido,numero,correo} = paciente;
  setNombre(nombre);
  setApellido(apellido);
  setNumero(numero);
  setCorreo(correo);
  }
  
}, [paciente]);


//esta funcion funciona para generar id randoms, PUEDE FUNCIONAR EN OTROS PROGRAMAS.
const generarID = () =>{
  const fecha = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);
  return random + fecha;
} 

const manejadorSubmit = (e) => {
  e.preventDefault();
  console.log('Enviando formulario');
  //validando que no tenga campos vacios
  if([nombre.trim(),apellido.trim(),numero.trim(),correo.trim()].includes('')){
    console.log('no se permiten vacios')
    setError(true);
    return;
  }
  setError(false);
  //crear un objeto
  const objetoPaciente={
    nombre, apellido, numero, correo
  }

  //para modificar y se guarde
  if(paciente.id){
    objetoPaciente.id = paciente.id;
    const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
    setPacientes(pacientesActualizados);
  }else{
    objetoPaciente.id = generarID();
    setPacientes([...pacientes, objetoPaciente])
  }
  //para separar los arreglos y los separe para que no se sobreescriban, para eso son los 3 puntos
  
  limpiar();
}


const limpiar = () =>{
  setNombre('');
  setApellido('');
  setNumero('');
  setCorreo('');
}

  return (
    <div className='p-[20px] md:w-1/2 lg:w-2/5 bg-slate-600 rounded-md text-white'>
      <h1 className='text-center font-bold text-2xl'>Registrar Pacientes</h1>
      <h2 className='text-center font-bold text-xl mb-5'>-Agrega pacientes-</h2>
        <form 
          onSubmit={manejadorSubmit}
        >
          {error && (<div className='bg-red-500 text-center rounded-md font-bold text-xl mb-5 uppercase'>
            <p>Llenar todos los campos!</p>
            </div>)}

          <div>
            <label className='block mb-1 mt-5 '>Nombre</label>
            <input type="text" placeholder='Nombre' className='border-2 p-1 w-full rounded-md text-black' 
            value={nombre}
            onChange = {(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-1 mt-1'>Apellidos</label>
            <input type="text" placeholder='Apellidos' className='border-2 p-1 w-full rounded-md text-black'
            value={apellido}
            onChange = {(e) => setApellido(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-1 mt-1'>Numero</label>
            <input type="text" placeholder='Numero' className='border-2 p-1 w-full rounded-md text-black'
            value={numero}
            onChange = {(e) => setNumero(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-1 mt-1'>Correo electronico</label>
            <input type="text" placeholder='Correo' className='border-2 p-1 w-full rounded-md text-black'
            value={correo}
            onChange = {(e) => setCorreo(e.target.value)}
            />
          </div>
          <div>
            <input 
            type="submit" 
            className='mt-6 w-full rounded-md uppercase bg-slate-400 p-2 hover:bg-slate-500 cursor-pointer' 
            value={paciente.id ? 'Actualizar Paciente' : 'Agregar Estidiante'}/>
            
          </div>
        </form>
    </div>

  )
}

export default Formulario