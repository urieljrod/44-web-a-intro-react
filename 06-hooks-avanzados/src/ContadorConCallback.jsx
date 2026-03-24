import { useCallback, useState } from "react"


export const ContadorConCallback = () => {

    const [count, setCount] = useState(0)

    const incrementar = useCallback(() => {
        console.log("Incrementando")
        setCount(prev => prev + 1)
    }, [])

    const handleClick = useCallback(() => {
        console.log("Click en el hijo")
    }, [])

    console.log("El componente se ha renderizado")
    console.log("Incrementar: ", incrementar)

    return (
    <>
        <h3>Contador con useCallback</h3>
        <p>Contador: {count}</p>
        <button onClick={incrementar}>Incrementar</button>
        <Hijo onClick={handleClick} />
    </>
    )
}


export const Hijo = ({onClick}) => {

    console.log("El componente Hijo se ha renderizado")

    return <button onClick={onClick}>Hijo</button>
}
