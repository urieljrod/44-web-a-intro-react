
export const StatusMessage = ({status, color}) => {

    switch (status) {
        case "loading":
            return <p style={{ color: color}}>Cargando...</p>
        case "success":
            return <p style={{ color: color }}>Operación exitosa</p>
        case "error":
            return <p style={{ color: color }}>Ocurrió un error</p>
        default:
            return <p style={{ color: color }}>Estado no válido</p>
    }

}
