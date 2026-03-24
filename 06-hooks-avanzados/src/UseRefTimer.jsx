import { useRef } from "react"

export const UseRefTimer = () => {

    const timerRef = useRef(null)
    console.log("Componente renderizado")

    const iniciarTemporizador = () => {
        timerRef.current = setTimeout(() => {
            alert("Tiempo agotado :(")
        }, 4000)
    }

    const cancelarTemporizador = () => {
        clearTimeout(timerRef.current)
        alert("Temporizador cancelado")
    }

    return (
        <>
            <button onClick={iniciarTemporizador}>Iniciar Temporizador</button>
            <button onClick={cancelarTemporizador}>Cancelar Temporizador</button>
        </>
    )
}

