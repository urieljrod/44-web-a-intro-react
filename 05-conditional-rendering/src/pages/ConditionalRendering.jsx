import { useEffect, useState } from "react"
import { Notification } from "./Notification"
import { StatusMessage } from "./StatusMessage"
import { WelcomeMessage } from "./WelcomeMessage"

export const ConditionalRendering = () => {
    const [estado, setEstado] = useState("loading")

  useEffect(() => {
    const timer = setTimeout(() => {
      setEstado("success")
    }, 3000)
  
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <>
      <WelcomeMessage isLoggedIn={true} />
      <Notification hayMensaje={false} />
      <StatusMessage status={estado} color="silver" />
    </>
  )
}