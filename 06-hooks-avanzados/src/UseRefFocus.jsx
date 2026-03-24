import { useEffect, useRef } from "react"


export const UseRefFocus = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    

    return (
        <>
        <form>
            <input type="name" ref={inputRef} placeholder="Nombre" />
            <br />
            <input type="email" ref={inputRef} placeholder="Correo" />
            <br />
            <input type="password" ref={inputRef} placeholder="Contraseña" />
        </form>
        </>
    )
}
