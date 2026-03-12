import { Contador } from "./components/Contador.jsx"
import { PerfilUsuario } from "./components/PerfilUsuario.jsx"
import { TarjetaPresentacion } from "./components/TarjetaPresentacion.jsx"


const userData = {
  name: "Uriel",
  country: "México",
  age: 22
}

export const App = () => {
  return (
    <>
    <h1>Componente App</h1>
    <TarjetaPresentacion {...userData} /> 
    <Contador />
    <PerfilUsuario />
    </>
  )
}
