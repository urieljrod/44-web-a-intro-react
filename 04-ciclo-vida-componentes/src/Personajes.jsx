import { useContext, useEffect, useState } from "react"
import { UserContext } from "./context/UserContext"


export const Personajes = () => {

    const {user} = useContext(UserContext)
    const [personajes, setpersonajes] = useState([])

    useEffect(() => {
        const obtenerPersonajes = async () => {
            try {
                const respuesta = await fetch("https://rickandmortyapi.com/api/character")
                const data = await respuesta.json()
                setpersonajes(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerPersonajes()
    }, [])

    return (
    <>
        <h2>Tema favorito: {user.tema}</h2>
        <ul>
            {personajes.map((personaje) => (
                <li key={personaje.id}>{personaje.name},{personaje.status}</li>
            ))}
        </ul>
    </>
    )
}
