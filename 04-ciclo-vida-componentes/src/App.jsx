import { useContext } from "react"
import { Personajes } from "./Personajes"
import { UserContext } from "./context/UserContext"

export const App = () => {

  const {user} = useContext(UserContext)

  return (
    <>

      <h1>User: {user.nombre}</h1>

      <Personajes />
    </>
  )
}

