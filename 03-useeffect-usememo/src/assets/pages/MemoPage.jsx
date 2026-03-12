import { useState } from "react"


export const MemoPage = () => {
    const [input, setInput] = useState(0)
    const calculoCostoso = (num) => {
    console.log("Calculando....")
    let result = 0
    for (let i = 0; i < 1000000; i++) {
      result += num * i
    }
    return result
    }

    const resultadoMemorizado = useMemo( () => calculoCostoso(input), [input] )
    return (
    <>
    <h1>Hook useMemo 🦆🎅🏻</h1>
    <input 
        type="number"
        value={input} 
        onChange={ (e)=>{ setInput( e.target.value ) } }
    />
    <p>Resultado memorizado: {resultadoMemorizado}</p>
    </>
    )
}
