import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Listado from "./components/Listado"



function App() {
  //es para tener la lista de estudiantes, es una lista
  const [pacientes, setPacientes] = useState([]);
  //aqui se guarda el estudiante que se va a modificar, es un objeto
  const [paciente, setPaciente] = useState({})

  function eliminarPaciente(id) {
    setPacientes(pacientes.filter((paciente) => paciente.id !== id));
  }

  return (
    <div className="container mx-auto">
      <Header/>

      <div className="mt-12 md:flex gap-5">
      <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente= {setPaciente}
      />
      <Listado 
      //aqui estan los pacientes
      pacientes={pacientes}
      //aqui es para que se cargue la data cuando se pique el modificar
      setPaciente={setPaciente}

      eliminarPaciente={eliminarPaciente}
    

      />
      </div>
    </div>
  )
}

export default App
