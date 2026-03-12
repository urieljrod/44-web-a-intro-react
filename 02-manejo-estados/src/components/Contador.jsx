import { useState } from "react"


export const Contador = () => {
    
    const [contador, setContador] = useState(0)
    const [color, setColor] = useState("yellow")
    let num = 0

    // function sumar () {
    //     num = num + 1
    // }

    return (
    <>
        <h3>El contador está en: {contador}</h3>
        {/* <h3>El num está en: {num}</h3> */}
        <button onClick={() => setContador(contador + 1)}>Incrementar Contador</button>
            
        {/* <button onClick={() => setNum(num + 1)}>Incrementar Num</button> */}
    </>
    )
}
