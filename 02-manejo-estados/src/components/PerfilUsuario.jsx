import { useState } from "react"

export const PerfilUsuario = () => {
    const [usuario, setUsuario] = useState({ nombre: "Uriel", edad: 22})

    const actualizarEdad = () => {
        setUsuario({ ...usuario, edad: usuario.edad + 1 })
    }
  return (
    <>
    <div>
        <p>Nombre: {usuario.nombre}</p>
        <p>Edad: {usuario.edad}</p>
        <button onClick={ () => {actualizarEdad() } }>Cumplir años</button>
    </div>
    </>
  )
}

