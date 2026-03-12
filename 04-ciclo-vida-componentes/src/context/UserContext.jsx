import { createContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const user = {
        nombre: "Mary",
        correo: "marymary.com",
        tema: "react"
    }
    
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
    
}